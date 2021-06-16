import { Router } from "express";
import { transactionController } from "./transactions.controller";

const router = Router();

router.get("/purchases", transactionController.allPurchases);
router.get("/sales", transactionController.allSales);

router.post("/purchases", transactionController.purchase);
router.post("/sales", transactionController.sale);

export default router;
