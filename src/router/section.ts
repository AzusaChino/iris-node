import { Router, Request, Response } from "express";
import { insertSection, querySection } from "../service/section";
import { ok, fail } from "../common/index";
import { uuid } from "../utils";
import authHandler from "../middleware/auth";

const SectionRouter = Router();

SectionRouter.get("/section", authHandler, (req: Request, res: Response) => {
  querySection()
    .then((r) => {
      res.status(200).json(ok({ data: r }));
    })
    .catch(() => {
      res.status(500).json(fail({ message: "查询section失败" }));
    });
});

SectionRouter.post("/section", authHandler, (req: Request, res: Response) => {
  const section = req.body;
  section.id = uuid();
  insertSection(section)
    .then((r) => {
      res.status(200).json(ok({ message: "新增成功" }));
    })
    .catch(() => {
      res.status(500).json(fail({ message: "查询section失败" }));
    });
});

export default SectionRouter;
