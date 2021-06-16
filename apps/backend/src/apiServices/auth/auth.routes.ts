import { Router } from "express";
import { authController } from "./auth.controller";
import { Auth } from "middleWares/auth";

const router = Router();

router.use(Auth);

router.post("/login", authController.login);
router.post("/register", authController.register);

export default router;
