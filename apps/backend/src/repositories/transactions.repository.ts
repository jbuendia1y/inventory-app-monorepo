import { excute } from "infra/database";

class Repository {
  private table: string;
  constructor(table: string) {
    this.table = table;
  }

  public async find() {
    return await excute({ query: "SELECT * FROM " + this.table });
  }

  public async insert(data: any) {
    return await excute({
      query: `INSERT INTO ${this.table} SET ?`,
      values: data,
    });
  }
}

/* class PurchasesRepository {
  private table = "purchases";

  public async find() {
    return await excute({ query: "SELECT * FROM " + this.table });
  }

  public async insert(data: any) {
    return await excute({
      query: `INSERT INTO ${this.table} SET ?`,
      values: data,
    });
  }
}

class SalesRepository {
  private table = "sales";

  public async find() {
    return await excute({ query: "SELECT * FROM " + this.table });
  }

  public async insert(data: any) {
    return await excute({
      query: `INSERT INTO ${this.table} SET ?`,
      values: data,
    });
  }
}
 */

class TransactionsRepository {
  public purchases: Repository;
  public sales: Repository;

  constructor() {
    this.purchases = new Repository("purchases");
    this.sales = new Repository("sales");
  }
}

export const transactionsRepository = new TransactionsRepository();
