import { Record } from "../model";
import { query } from "../utils/db";

const tableName = `tb_record`;

export const queryRecord = (sid: string): Promise<Array<Record>> => {
  return query(`select * from ${tableName} where sid = '${sid}'`);
};

export const insertRecord = (record: Record): Promise<string> => {
  // 1. 已存在的情况，进行更新
  const checkExist = `select count(1) from ${tableName} where name = ${record.name}`;
  const res = query(checkExist);
  // 2. 不存在的情况，进行插入
  const sql = `insert into ${tableName}(id, sid, name, date, season, episode, visual, star, comment) 
  values('${record.id}','${record.sid}', '${record.name}', '${record.date}', '${
    record.season || ""
  }', '${record.episode || ""}', '${record.visual || ""}', '${
    record.star || ""
  }', '${record.comment || ""}')`;
  return query(sql);
};
