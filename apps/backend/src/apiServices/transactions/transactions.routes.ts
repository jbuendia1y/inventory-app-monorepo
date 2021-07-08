import { Router } from "express";
import { transactionController } from "./transactions.controller";

const router = Router();

router.get("/purchases", transactionController.purchases);
router.get("/sales", transactionController.sales);

router.post("/purchases", transactionController.purchases);
router.post("/sales", transactionController.sales);

export default router;
