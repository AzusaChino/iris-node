import { Router, Request, Response } from "express";
import { login } from "../service/login";
import { ok } from "../common";

const LoginRouter = Router();

LoginRouter.route("/login").post((req: Request, res: Response) => {
  const param = req.body;
  res.status(200).json(ok(login(param)));
});

export default LoginRouter;
