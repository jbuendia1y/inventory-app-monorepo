import { excute } from "infra/database";
import FetchReports from "scripts/fetchReports";

interface saveCacheParams {
  year: number;
  type: "purchases" | "sales";
}

class ReportsRepository {
  private table = "reports";
  private usedToday: boolean | undefined;

  public reports: { purchases: number; sales: number; year: number }[] = [];
  public years: number[] = [];

  constructor() {
    FetchReports().then((res) => {
      this.reports = res.reports;
      this.years = res.years;
    });
  }

  public async find() {
    return this.reports;
  }

  private saveCache({ year, type }: saveCacheParams) {
    const difference = this.years[this.years.length - 1] - year;
    const base = {
      purchases: 0,
      sales: 0,
    };
    if (difference < 0) {
      const data = base;
      (data as any)[type] += 1;
      this.reports.push({
        ...base,
        year,
      });
    } else if (difference === 0 || difference > 0) {
      const data: any = { year };
      const index = this.reports.indexOf(data);
      (this.reports[index] as any)[type] += 1;
    }
  }

  private async setReport({
    idProduct,
    date,
    type,
  }: {
    idProduct: number;
    date: any;
    type: string;
  }) {
    const data: any = {
      idProduct,
      date,
      type,
    };

    data[type] = 1;
    this.usedToday = true;

    return await excute({
      query: `INSERT INTO ${this.table} SET ?`,
      values: data,
    });
  }

  public async insert(data: any) {
    const { date, type }: { date: string; type: "purchases" | "sales" } = data;
    if (!this.usedToday) {
      return await this.setReport({
        idProduct: data.idProduct,
        date,
        type,
      }).then((res) => {
        this.saveCache({ type, year: parseInt(date.slice(0, 4)) });
        return res;
      });
    } else {
      return await excute({
        query: `UPDATE ${this.table} SET ${type} = ${type} + 1 WHERE idProduct = ? AND date = ?`,
        values: [data.idProduct, date],
      }).then((res) => {
        this.saveCache({ type, year: parseInt(date.slice(0, 4)) });
        return res;
      });
    }
  }
}

export const reportsRepository = new ReportsRepository();
