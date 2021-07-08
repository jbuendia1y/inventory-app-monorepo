import { excute } from "infra/database";

const writeReport = async (data: any, use?: boolean) => {
  const { type } = data;
  const setReport = async ({ idProduct, date, type }: any) => {
    const data: any = {
      idProduct,
      date,
      type,
    };

    data[type] = 1;

    return await excute({
      query: `INSERT INTO ${type} SET ?`,
      values: data,
    });
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

  public async find() {
    return await excute({ query: "SELECT * FROM " + this.table });
  }

  public async insert(data: any) {
    await writeReport(data, this.usedToday);
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
