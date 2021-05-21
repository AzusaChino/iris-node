import { Request, Response, NextFunction } from "express";

const logHandler = (req: Request, res: Response, next: NextFunction) => {
  console.log(`接收到请求，URL：${req.url}`);
  next();
};

export default logHandler;
