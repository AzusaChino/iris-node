import { Section } from "../model";
import pool from "../utils/db";
import { CommonError } from "../common/errors";

const tableName = `tb_section`;

export const querySection = (): Array<Section> => {
  pool.query(`select * from ${tableName}`, (err, results) => {
    if (err) {
      throw new CommonError(1002, "查询section失败");
    }
    return results;
  });
  return [];
};
