import { connection } from "Infra/connection";

class TransactionsService {
  public transactions = {
    purchases: [] as any[],
    sales: [] as any[],
  };

  async getAllTransactions() {
    const purchases = await connection.get("/transactions/purchases");
    const sales = await connection.get("/transactions/sales");
    this.transactions = { purchases, sales };

    return this.transactions;
  }

  async insert(data: any, type: "purchases" | "sales") {
    const url = "/transactions/" + type;
    const res = await connection.post(url, data);
    return res.ok;
  }
}

export const transactionsService = new TransactionsService();
