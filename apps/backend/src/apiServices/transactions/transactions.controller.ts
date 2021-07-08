import { Request, Response } from "express";
import { transactionsRepository } from "./transactions.repository";

class TransactionController {
  public async purchases(req: Request, res: Response) {
    if (req.method === "GET") {
      const data = await transactionsRepository.purchases.find();
      res.json(data);
    } else if (req.method === "POST") {
      const payload = await transactionsRepository.purchases.insert(req.body);
      if (!payload) return res.sendStatus(500).end();

      return res.sendStatus(204).end();
    }
  }

  public async sales(req: Request, res: Response) {
    if (req.method === "GET") {
      const data = await transactionsRepository.sales.find();
      res.json(data);
    } else if (req.method === "POST") {
      const payload = await transactionsRepository.sales.insert(req.body);
      if (!payload) return res.sendStatus(500).end();

      return res.sendStatus(204).end();
    }
  }
}

export const transactionController = new TransactionController();
