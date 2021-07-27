import { excute } from "infra/database";

// Save Report in DB
const writeReport = async (data: any, use?: boolean) => {
  const { type } = data;
  const setReport = async ({ idProduct, date, type }: any) => {
    const data: any = {
      idProduct,
      date,
      type,
    };

    data[type] = 1;

    await excute({
      query: `INSERT INTO ${type} SET ?`,
      values: data,
    });
    return "USE TODAY";
  };

  if (!use) {
    return await setReport({
      idProduct: data.idProduct,
      date: data.date,
      type,
    });
  }
  return await excute({
    query: `UPDATE reports SET ${type} = ${type} + 1 WHERE idProduct = ? AND date = ?`,
    values: [data.idProduct, data.date],
  });
};

class Repository {
  private table: string;
  private usedToday: boolean | undefined;

  constructor(table: string) {
    this.table = table;
    const date = new Date().toJSON().split("T")[0].split("-");
    const query = `SELECT day(date),month(date),year(date) FROM ${this.table} WHERE year(date) = ? AND month(date) = ? AND day(date) = ?`;
    excute(
      {
        query,
        values: [date[0], date[1], date[2]],
      },
      true
    ).then((res) => {
      if (res) this.usedToday = true;
    });
  }

  public async find() {
    return await excute({ query: "SELECT * FROM " + this.table });
  }

  // Save Transaction by Type and Save Report
  public async insert(data: any) {
    const used = await writeReport(data, this.usedToday);
    if (typeof used === "string") this.usedToday = true;
    return await excute({
      query: `INSERT INTO ${this.table} SET ?`,
      values: data,
    });
  }
}

class TransactionsRepository {
  public purchases: Repository;
  public sales: Repository;

  constructor() {
    this.purchases = new Repository("purchases");
    this.sales = new Repository("sales");
  }
}

export const transactionsRepository = new TransactionsRepository();
