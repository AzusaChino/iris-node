import dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";

import MasterRouter from "./router";
import ErrorHandler from "./model/error-handler";

dotenv.config({
  path: ".env",
});

const app = express();
const port = process.env.APP_PORT || 5000;

app.use(
  (err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode || 500).json({
      status: "error",
      statusCode: err.statusCode,
      message: err.message,
    });
  }
);

app.use("/api", MasterRouter);

app.listen(port, () => console.log(`> Listening on port ${port}`));