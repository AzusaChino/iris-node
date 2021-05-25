import { Router } from "express";
import { ok, fail } from "../common";
import { queryRecord, insertRecord, updateRecord } from "../service/record";
import { uuid } from "../utils";
import authHandler from "../middleware/auth";

const RecordRouter = Router();

RecordRouter.get("/:sid/record", authHandler, (req, res) => {
  const sid = req.params["sid"];
  const { pageIndex, pageSize } = req.query;
  const { username } = req as any;
  // 根据sid和username，查询个人存储的record
  queryRecord({ sid, username, pageIndex, pageSize })
    .then((r) => {
      res.status(200).json(ok({ data: r }));
    })
    .catch((e) => {
      res.status(500).json(fail({ message: "查询record失败" }));
    });
});

RecordRouter.post("/record", authHandler, (req, res) => {
  const record = req.body;
  const { username } = req as any;
  record.id = uuid();
  record.uname = username;
  insertRecord(record)
    .then(() => {
      res.status(200).json(ok({ message: "新增成功" }));
    })
    .catch((e) => {
      res.status(500).json(fail({ message: "新增record失败" }));
    });
});

RecordRouter.put("/record", authHandler, (req, res) => {
  const record = req.body;
  updateRecord(record)
    .then(() => {
      res.status(200).json(ok({ message: "更新成功" }));
    })
    .catch((e) => {
      res.status(500).json(fail({ message: "更新失败" }));
    });
});

export default RecordRouter;
