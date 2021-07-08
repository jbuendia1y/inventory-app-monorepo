import { Request, Response } from "express";
import { reportsRepository as repository } from "./reports.repository";

class ReportsController {
  public async GET(req: Request, res: Response) {
    const year = parseInt(req.params.year);
    const data = await repository.find(year);
    res.json(data);
  }
}

export const reportsController = new ReportsController();
