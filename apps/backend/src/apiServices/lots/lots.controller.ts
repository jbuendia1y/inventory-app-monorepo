import { Request, Response } from "express";
import { lotsRepository } from "repositories/inventory/lots.repository";

class LotsController {
  public async getAll(req: Request, res: Response) {
    const data = await lotsRepository.find();
    if (!data) res.status(500).end();
    return res.json(data).status(200).end();
  }

  public async newLot(req: Request, res: Response) {
    const data = await lotsRepository.insert(req.body);
    if (!data) res.status(500).end();

    return res.status(204).end();
  }
}

export const lotsController = new LotsController();
