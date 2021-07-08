import express, { Express, urlencoded, json } from "express";
import cors from "cors";

import { join } from "path";
import { PORT } from "./config";

import AuthRoutes from "apiServices/auth/auth.routes";
import ProductsRoutes from "apiServices/products/products.routes";
import TransactionsRouters from "apiServices/transactions/transactions.routes";
import LotsRoutes from "apiServices/lots/lots.routes";
import ReportsRoutes from "apiServices/reports/reports.routes";

class Server {
  public app: Express;

  constructor(app: Express) {
    this.app = app;
  }

  public init() {
    this.config();
    this.middleWares();
    this.routes();

    return this.app.listen(this.app.get("PORT"), () => {
      console.log("SERVER READY");
    });
  }

  private config() {
    this.app.set("PORT", PORT);
  }

  private middleWares() {
    this.app.use(cors());
    this.app.use(urlencoded({ extended: true }));
    this.app.use(json());
    if (process.env.NODE_ENV === "production") {
      this.app.use(express.static(join(__dirname, "../../frontend/build")));
    }
  }

  private routes() {
    this.app.use("/", AuthRoutes);
    this.app.use("/products", ProductsRoutes);
    this.app.use("/lots", LotsRoutes);
    this.app.use("/transactions", TransactionsRouters);
    this.app.use("/reports", ReportsRoutes);
  }
}

export const server = new Server(express());
