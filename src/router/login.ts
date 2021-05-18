import { Router, Request, Response } from "express";
import { login } from "../service/login";
import { ok, fail } from "../common";

const LoginRouter = Router();

LoginRouter.route("/login").post((req: Request, res: Response) => {
  const param = req.body;
  login(param)
    .then((r) => {
      res.status(200).json(ok(r));
    })
    .catch((e) => {
      res.status(500).json(fail("登陆失败"));
    });
});

export default LoginRouter;
