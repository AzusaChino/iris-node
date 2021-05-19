import { Router } from "express";
import { ok, fail } from "../common";
import { queryRecord, insertRecord } from "../service/record";
import { uuid } from "../utils";
import authHandler from "../middleware/auth";

const RecordRouter = Router();

RecordRouter.get("/record/:sid", authHandler, (req, res, next) => {
  const sid = req.params["sid"];
  queryRecord(sid)
    .then((r) => {
      res.status(200).json(ok({ data: r }));
    })
    .catch((e) => {
      res.status(500).json(fail({ message: "查询record失败" }));
    });
});

RecordRouter.post("/record", authHandler, (req, res, next) => {
  const record = req.body;
  record.id = uuid();
  insertRecord(record)
    .then(() => {
      res.status(200).json(ok({ message: "新增成功" }));
    })
    .catch((e) => {
      res.status(500).json(fail({ message: "新增record失败" }));
    });
});

export default RecordRouter;
