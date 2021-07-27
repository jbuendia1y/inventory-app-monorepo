import { Request, Response } from "express";
import { reportsRepository as repository } from "./reports.repository";

class ReportsController {
  public async GET(req: Request, res: Response) {
    const data = await repository.find().catch((err) => err.message);
    if (typeof data === "string") res.sendStatus(500);
    res.json(data);
  }
}

export const reportsController = new ReportsController();
