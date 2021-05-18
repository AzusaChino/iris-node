import { Router, Request, Response } from "express";
import { insertSection, querySection } from "../service/section";
import { ok, fail } from "../common/index";
import { uuid } from "../utils";

const SectionRouter = Router();

SectionRouter.get("/section", (req: Request, res: Response) => {
  querySection()
    .then((r) => {
      res.status(200).json(ok(r));
    })
    .catch(() => {
      res.status(500).json(fail("查询section失败"));
    });
});

SectionRouter.post("/section", (req: Request, res: Response) => {
  const section = req.body;
  section.id = uuid();
  insertSection(section)
    .then((r) => {
      res.status(200).json(ok(r));
    })
    .catch(() => {
      res.status(500).json(fail("查询section失败"));
    });
});

export default SectionRouter;
