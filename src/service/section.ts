import { Section } from "../model";
import ErrorHandler from "../model/error-handler";
import pool from "../utils/db";

const tableName = `tb_section`;

export const querySection = (): Array<Section> => {
  pool.query(`select * from ${tableName}`, (err, results) => {
    if (err) {
      throw new ErrorHandler(1002, "");
    }
    return results;
  });
  return [];
};
