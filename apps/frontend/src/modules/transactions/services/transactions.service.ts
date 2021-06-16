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
}

export const transactionsService = new TransactionsService();
