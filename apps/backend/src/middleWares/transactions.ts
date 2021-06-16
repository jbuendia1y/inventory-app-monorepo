import { Request, Response, NextFunction } from "express";

export const Auth = (
  req: Request,
  res: Response,
  next: NextFunction
): void | Response => {
  /*   const path = req.baseUrl + req.path;
   */ if (req.method === "POST") {
    /* if(path.includes("purchases")){

    }else if(path.includes("sales")){

    } */

    next();
  } else next();
};
