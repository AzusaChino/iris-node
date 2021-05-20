import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { accessSecret, JwtPayLoad } from "../common";

const authHandler = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, accessSecret, (err, payload) => {
      if (err) {
        return res.sendStatus(403);
      }
      // 通过request对象，向下传递校验后的username
      (req as any).username = (payload as JwtPayLoad).username;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

export default authHandler;
