import { Request, Response, NextFunction } from "express";

const logHandler = (req: Request, res: Response, next: NextFunction) => {
  const current = new Date().getTime();
  next();
  const cost = new Date().getTime() - current;
  console.log(
    `请求详情 ==> Url: ${req.url}, Method: ${req.method}, ResponseCode: ${res.statusCode}, Cost: ${cost}ms`
  );
};

export default logHandler;
