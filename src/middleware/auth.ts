import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { accessSecret } from "../common";

const authHandler = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, accessSecret, (err, payload) => {
      if (err) {
        return res.sendStatus(403);
      }
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

export default authHandler;
