import { Router } from "express";

import DemoRouter from "./demo";

class MasterRouter {
  private _router = Router();
  private _demo = DemoRouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching routers.
   */
  private _configure() {
    this._router.use("/demo", this._demo);
  }
}

export = new MasterRouter().router;
