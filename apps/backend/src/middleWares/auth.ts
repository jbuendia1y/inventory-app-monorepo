import { Request, Response, NextFunction } from "express";
import { jwt } from "infra/jwt";

export const Auth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> => {
  const path = req.baseUrl + req.path;
  const token = req.body.token;

  if (path.includes("/login")) {
    const { email, password } = req.body;
    if (token) {
      const user = await jwt.decryptToken(token);
      if (user) return res.json(user);
      else return res.sendStatus(401);
    }
    if (!email || !password) return res.sendStatus(400);
  } else if (path.includes("/register")) {
    const { email, password, name, role } = req.body;
    if (!email || !password || !name || !role) return res.sendStatus(400);
  }
  next();
};

export const token = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  if (!req.headers.authorization) return res.sendStatus(401);
  const token = req.headers.authorization.split(" ")[1];

  const user = await jwt.decryptToken(token);

  if (user) return next();
  else return res.sendStatus(401);
};
