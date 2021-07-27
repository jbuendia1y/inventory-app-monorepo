import { Request, Response } from "express";
import { productsRepository } from "repositories/inventory/products.repository";

class ProductsController {
  async all(req: Request, res: Response) {
    try {
      const data = await productsRepository
        .getAll()
        .catch((err) => err.message);
      res.status(201).json(data);
    } catch (err: any) {
      console.log(err);
      res.send(err);
    }
  }

  async insert(req: Request, res: Response) {
    const status = await productsRepository.insert(req.body);
    if (!status) return res.sendStatus(500);
    res.sendStatus(204);
  }
}

export const productsController = new ProductsController();
