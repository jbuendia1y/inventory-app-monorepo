import { Request, Response, NextFunction } from "express";

export const Products = (
  req: Request,
  res: Response,
  next: NextFunction
): void | Response => {
  if (req.method === "POST") {
    const fields = [
      "idProduct",
      "name",
      "stock",
      "price",
      "category",
      "format",
      "mark",
      "subcategory",
    ];
    const data = req.body;
    fields.map((field) => {
      if (typeof data[field] === "undefined") return res.sendStatus(400);
    });
  }

  next();
};
