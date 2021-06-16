import { Request, Response, NextFunction } from "express";

export const Auth = (
  req: Request,
  res: Response,
  next: NextFunction
): void | Response => {
  const path = req.baseUrl + req.path;
  if (path.includes("/login")) {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).end();
  } else if (path.includes("/register")) {
    const { email, password, name, role } = req.body;
    if (!email || !password || !name || !role) return res.status(400).end();
  }
  next();
};
