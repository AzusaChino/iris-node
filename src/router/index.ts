import { Router, Request, Response } from "express";
import LoginRouter from "./login";
import SectionRouter from "./section";
import RecordRouter from "./record";
import ErrorHandler from "../model/error-handler";

const AppRouter = Router();

AppRouter.use(LoginRouter, SectionRouter, RecordRouter);

export const errorHandler = (
  err: ErrorHandler,
  req: Request,
  res: Response
) => {
  res.status(err.statusCode || 500).json({
    status: "error",
    statusCode: err.statusCode,
    message: err.message,
  });
};

export default AppRouter;
