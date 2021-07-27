import { Request, Response, NextFunction } from "express";

export const Products = (
  req: Request,
  res: Response,
  next: NextFunction
): void | Response => {
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
  for (const field of fields) {
    if (typeof data[field] === "undefined") return res.sendStatus(400);
  }

  next();
};
