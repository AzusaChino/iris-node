import { Record } from "../model";
import { query } from "../utils/db";
import { CountResult } from "../common";

const tableName = `tb_record`;

type RecordSearchParam = {
  sid: string;
  username: string;
  pageIndex: any;
  pageSize: any;
};

export const queryRecord = async (
  param: RecordSearchParam
): Promise<Array<Record>> => {
  const limit = (((param.pageIndex as number) - 1) * param.pageSize) as number;
  return query(
    `select * from ${tableName} where sid = '${param.sid}' and uname = '${param.username}' limit ${limit}, ${param.pageSize}`
  );
};

export const insertRecord = async (record: Record): Promise<string> => {
  // 1. 已存在的情况，进行更新
  const checkExist = `select count(*) as cnt from ${tableName} where name = '${record.name}'`;
  const res: CountResult = await query(checkExist);
  if (res[0].cnt == 1) {
    const update = `update ${tableName} set date = '${
      record.timestamp
    }', season = '${record.season || ""}',
    episode = '${record.episode || ""}', visual = '${
      record.visual || ""
    }', start = '${record.star || ""}', comment = '${record.comment || ""}'`;
    return query(update);
  }
  // 2. 不存在的情况，进行插入
  const sql = `insert into ${tableName}(id, sid, uname, name, timestamp, season, episode, visual, star, comment) 
  values('${record.id}','${record.sid}', '${record.uname}', '${
    record.name
  }', '${record.timestamp}', '${record.season || ""}', '${
    record.episode || ""
  }', '${record.visual || ""}', '${record.star || ""}', '${
    record.comment || ""
  }')`;
  return query(sql);
};
