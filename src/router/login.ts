import { Router, Request, Response } from "express";
import { login } from "../service/login";
import { ok, fail } from "../common";

const LoginRouter = Router();

LoginRouter.route("/login").post((req: Request, res: Response) => {
  const { username, password } = req.body;
  login({ username, password })
    .then((r) => {
      const { cnt } = r[0];
      if (cnt == 1) {
        res.status(200).json(ok({ message: "登陆成功" }));
      } else {
        res.status(500).json(fail({ message: "用户不存在" }));
      }
    })
    .catch(() => {
      res.status(500).json(fail({ message: "登陆失败" }));
    });
});

export default LoginRouter;
