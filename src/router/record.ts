import { Router } from "express";
import { ok } from "../common";
import { queryRecord } from "../service/record";

const RecordRouter = Router();

RecordRouter.get("/record", (req, res) => {
  const sid = req.params["sid"];
  const results = queryRecord(sid);
  res.status(200).json(ok(results));
});

export default RecordRouter;
