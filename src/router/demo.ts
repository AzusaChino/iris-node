import { NextFunction, Request, Response, Router } from "express";

import Demo from "../service/demo";

class DemoRouter {
  private _router = Router();
  private _demo = Demo;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    this._router.get("/", (req: Request, res: Response, next: NextFunction) => {
      try {
        res.status(200).json(this._demo.defaultMethod());
      } catch (err) {
        next(err);
      }
    });
  }
}
export = new DemoRouter().router;
