import { Router } from "express";
import { lotsController } from "./lots.controller";

const router = Router();

router.get("/", lotsController.getAll);
router.post("/", lotsController.newLot);

export default router;
