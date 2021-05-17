import { Record } from "../model";
import ErrorHandler from "../model/error-handler";
import pool from "../utils/db";

const tableName = `tb_record`;

export const queryRecord = (sid: string): Array<Record> => {
  pool.query(`select * from ${tableName} where sid = ${sid}`, (err, res) => {
    if (err) {
      throw new ErrorHandler(1004, err.message);
    }
    return res;
  });
  return [];
};
