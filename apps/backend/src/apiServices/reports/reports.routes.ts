import { Router } from "express";
import { reportsController as controller } from "./reports.controller";

const router = Router();

router.get("/", controller.GET);

export default router;
