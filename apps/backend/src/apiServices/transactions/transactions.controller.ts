import { Request, Response } from "express";
import { transactionsRepository } from "repositories/transactions.repository";

class TransactionController {
  public async allPurchases(req: Request, res: Response): Promise<any> {
    const data = await transactionsRepository.purchases.find();
    res.json(data);
  }

  public async allSales(req: Request, res: Response): Promise<any> {
    const data = await transactionsRepository.sales.find();
    res.json(data);
  }

  public async purchase(req: Request, res: Response) {
    const payload = await transactionsRepository.purchases.insert(req.body);
    if (!payload) return res.sendStatus(500).end();

    return res.sendStatus(204).end();
  }

  public async sale(req: Request, res: Response) {
    const payload = await transactionsRepository.sales.insert(req.body);
    if (!payload) return res.sendStatus(500).end();

    return res.sendStatus(204).end();
  }
}

export const transactionController = new TransactionController();
