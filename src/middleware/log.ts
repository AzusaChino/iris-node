import { Request, Response, NextFunction } from "express";

const logHandler = (req: Request, res: Response, next: NextFunction) => {
  console.log(
    `接收到请求，URL：${req.url}，参数：${req.params}，body：${req.body}`
  );
  next();
};

export default logHandler;
