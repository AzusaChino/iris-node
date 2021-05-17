import { Router, Request, Response } from "express";
import { querySection } from "../service/section";
import { ok } from "../common/index";

const SectionRouter = Router();

SectionRouter.get("/section", (req: Request, res: Response) => {
  const results = querySection();
  res.status(200).json(ok(results));
});

export default SectionRouter;
