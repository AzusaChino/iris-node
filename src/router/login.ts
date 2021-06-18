import { Router, Request, Response } from "express";
import { login, register } from "../service/login";
import {
  ok,
  fail,
  accessSecret,
  refreshSecret,
  refreshTokens,
  JwtPayLoad,
} from "../common";
import jwt from "jsonwebtoken";
import { LoginParam, RegisterParam } from "../model";

const LoginRouter = Router();

LoginRouter.post("/login", (req: Request, res: Response) => {
  const loginParam: LoginParam = req.body;
  login(loginParam)
    .then((r) => {
      if (r) {
        const accessToken = jwt.sign(
          { username: loginParam.username },
          accessSecret,
          {
            expiresIn: "30m",
          }
        );
        const refreshToken = jwt.sign(
          { username: loginParam.username },
          refreshSecret
        );
        refreshTokens.push(refreshToken);
        res
          .status(200)
          .json(
            ok({ data: { accessToken, refreshToken }, message: "登陆成功" })
          );
      } else {
        res.status(500).json(fail({ message: "用户不存在" }));
      }
    })
    .catch((e) => {
      res.status(500).json(fail({ message: `登陆失败, ${e}` }));
    });
});

LoginRouter.post("/token", (req: Request, res: Response) => {
  const { token }: { token: string } = req.body;
  if (!token) {
    return res.sendStatus(401);
  }
  if (!refreshTokens.includes(token)) {
    return res.sendStatus(403);
  }
  jwt.verify(token, refreshSecret, (err, payload) => {
    if (err) {
      return res.sendStatus(403);
    }
    const p = payload as JwtPayLoad;
    const accessToken = jwt.sign(p, accessSecret, {
      expiresIn: "30m",
    });

    res.json(ok({ data: accessToken, message: "token 刷新成功" }));
  });
});

LoginRouter.post("/register", (req, res) => {
  const registerParam: RegisterParam = req.body;
  register(registerParam)
    .then(() => {
      res.status(200).json(ok({ message: "注册成功" }));
    })
    .catch((e) => {
      res.status(500).json(fail({ message: `注册失败, ${e}` }));
    });
});

export default LoginRouter;
