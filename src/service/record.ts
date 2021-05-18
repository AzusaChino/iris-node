import { Record } from "../model";
import { query } from "../utils/db";

const tableName = `tb_record`;

export const queryRecord = (sid: string): Promise<Array<Record>> => {
  return query(`select * from ${tableName} where sid = ${sid}`);
};

export const insertRecord = (record: Record): Promise<string> => {
  return query(
    `insert into ${tableName} values(${record.id},${record.sid}, ${record.name}, ${record.date}, ${record.season}, ${record.episode}, ${record.visual}, ${record.star}, ${record.comment})`
  );
};
