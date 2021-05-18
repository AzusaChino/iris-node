import { Router } from "express";
import { ok, fail } from "../common";
import { queryRecord, insertRecord } from "../service/record";
import { uuid } from "../utils";

const RecordRouter = Router();

RecordRouter.get("/record/:sid", (req, res, next) => {
  const sid = req.params["sid"];
  queryRecord(sid)
    .then((r) => {
      res.status(200).json(ok({ data: r }));
    })
    .catch((e) => {
      res.status(500).json(fail({ message: "查询record失败" }));
    });
});

RecordRouter.post("/record", (req, res, next) => {
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
