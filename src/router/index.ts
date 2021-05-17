import { Router } from "express";
import LoginRouter from "./login";
import DemoRouter from "./demo";

const AppRouter = Router();

AppRouter.use(DemoRouter, LoginRouter);

export = AppRouter;
