import { Router, Request, Response, NextFunction } from "express";
import LoginRouter from "./login";
import SectionRouter from "./section";
import RecordRouter from "./record";
import UserRouter from "./user";
import { fail } from "../common";

const AppRouter = Router();

AppRouter.use(LoginRouter, SectionRouter, RecordRouter, UserRouter);

// common error handler
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    next(err);
  }
  res.status(500).json(fail({ message: err.message }));
};

export default AppRouter;
