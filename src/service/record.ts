import { Record } from "../model";
import { CommonError } from "../common/errors";
import pool from "../utils/db";

const tableName = `tb_record`;

export const queryRecord = (sid: string): Array<Record> => {
  pool.query(`select * from ${tableName} where sid = ${sid}`, (err, res) => {
    if (err) {
      throw new CommonError(1004, "查询Record失败");
    }
    return res;
  });
  return [];
};
