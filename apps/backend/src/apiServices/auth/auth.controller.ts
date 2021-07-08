import { Request, Response } from "express";
import { authService } from "services/auth.service";

class AuthController {
  public async login(req: Request, res: Response) {
    const user = await authService.login(req.body);

    if (!user) return res.sendStatus(401);
    res.json(user).status(200);
  }
  public async register(req: Request, res: Response) {
    const ok = await authService.register(req.body);

    if (!ok) return res.sendStatus(401);
    res.sendStatus(204);
  }
}

export const authController = new AuthController();
