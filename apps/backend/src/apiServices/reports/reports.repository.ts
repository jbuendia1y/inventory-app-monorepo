import { excute } from "infra/database";

class ReportsRepository {
  private table = "reports";
  private usedToday: boolean | undefined;

  public reports: { year: number; dates: any[] }[] = [];
  public ages: number[] = [];

  constructor() {
    const date = new Date().getUTCDate();
    const query = `SELECT day(date),month(date),year(date) FROM ${this.table}`;
    excute(
      {
        query,
        values: [date],
      },
      true
    ).then((res) => {
      if (res) this.usedToday = true;
    });
  }

  public async find(year: number) {
    if (this.ages.indexOf(year) !== -1) {
      this.reports.map((item) => {
        if (item.year === year) return item.dates;
      });
    }
    const dates = await excute({
      query:
        "SELECT purchases,sales,day(date) as day,month(date) as month FROM reports WHERE year(date) = ?",
      values: [year],
    });

    this.ages.push(year);
    this.reports.push({
      year,
      dates,
    });

    return dates;
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
    let ok = false;
    if (!this.usedToday) {
      ok = await this.setReport({
        idProduct: data.idProduct,
        date: data.date,
        type: data.type,
      });
    } else {
      ok = await excute({
        query: `UPDATE reports SET ${data.type} = ${data.type} + 1 WHERE idProduct = ? AND date = ?`,
        values: [data.idProduct, data.date],
      });
    }
    return ok;
  }
}

export const reportsRepository = new ReportsRepository();
