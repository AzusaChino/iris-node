import { Record } from "../model";
import { query } from "../utils/db";
import { CountResult } from "../common";

const tableName = `tb_record`;

export const queryRecord = async (sid: string): Promise<Array<Record>> => {
  return query(`select * from ${tableName} where sid = '${sid}'`);
};

export const insertRecord = async (record: Record): Promise<string> => {
  // 1. 已存在的情况，进行更新
  const checkExist = `select count(*) as cnt from ${tableName} where name = '${record.name}'`;
  const res: CountResult = await query(checkExist);
  if (res[0].cnt == 1) {
    const update = `update ${tableName} set date = '${
      record.date
    }', season = '${record.season || ""}',
    episode = '${record.episode || ""}', visual = '${
      record.visual || ""
    }', start = '${record.star || ""}', comment = '${record.comment || ""}'`;
    return query(update);
  }
  // 2. 不存在的情况，进行插入
  const sql = `insert into ${tableName}(id, sid, name, date, season, episode, visual, star, comment) 
  values('${record.id}','${record.sid}', '${record.name}', '${record.date}', '${
    record.season || ""
  }', '${record.episode || ""}', '${record.visual || ""}', '${
    record.star || ""
  }', '${record.comment || ""}')`;
  return query(sql);
};
