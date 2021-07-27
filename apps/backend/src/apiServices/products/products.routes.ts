import { Router } from "express";
import { token } from "middleWares/auth";
import { Products } from "middleWares/products";
import { productsController } from "./products.controller";

const router = Router();

router.use(token);

router.get("/", productsController.all);
router.post("/", Products, productsController.insert);

export default router;
