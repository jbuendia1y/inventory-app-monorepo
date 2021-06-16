import { excute } from "infra/database";

class LotsRepository {
  public async find(): Promise<any | boolean> {
    return await excute({
      query: "SELECT * FROM lots",
    });
  }

  public async insert(data: any): Promise<boolean> {
    return await excute({
      query: "INSERT INTO lots SET ?",
      values: data,
    });
  }
}

export const lotsRepository = new LotsRepository();
