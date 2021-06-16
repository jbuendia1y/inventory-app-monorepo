import { Request, Response } from "express";
import { productsRepository } from "repositories/inventory/products.repository";

class ProductsController {
  async all(req: Request, res: Response) {
    const data = await productsRepository.getAll();
    res.json(data).status(201).end();
  }

  async insert(req: Request, res: Response) {
    const status = await productsRepository.insert(req.body);
    if (!status) return res.status(500).end();
    res.status(204).end();
  }
}

export const productsController = new ProductsController();
