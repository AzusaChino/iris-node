import { Record } from "../model";
import { query } from "../utils/db";
import { InsertResult, RecordSearchParam, UpdateResult } from "../common";

const tableName = `tb_record`;

export const queryRecord = async (
  param: RecordSearchParam
): Promise<Array<Record>> => {
  const limit = (((param.pageIndex as number) - 1) * param.pageSize) as number;
  return query(
    `select * from ${tableName} where sid = '${param.sid}' and username = '${param.username}' limit ${limit}, ${param.pageSize}`
  );
};

export const insertRecord = async (
  record: Record
): Promise<InsertResult | UpdateResult> => {
  // 1. 已存在的情况，进行更新
  const checkExist = `select id from ${tableName} where title = '${record.title}'`;
  const res: Array<{ id: string }> = await query(checkExist);
  if (res.length == 1) {
    record.id = res[0].id;
    return query(generateUpdateSql(record));
  }
  // 2. 不存在的情况，进行插入
  const sql = `insert into ${tableName}(id, sid, username, title, episode, status, watched, timestamp, star, visual, comment) 
  values('${record.id}','${record.sid}', '${record.username}', 
  '${record.title}', '${record.episode}', '${record.status}',
  '${record.watched}','${record.timestamp}', '${record.star || ""}', 
  '${record.visual || ""}','${record.comment || ""}')`;
  return query(sql);
};

export const updateRecord = async (record: Record): Promise<UpdateResult> => {
  return query(generateUpdateSql(record));
};

const generateUpdateSql = (record: Record): string => {
  let optionalUpdate = "";
  if (record.status) {
    optionalUpdate += `, status = '${record.status}'`;
  }
  if (record.watched) {
    optionalUpdate += `, watched = '${record.watched}'`;
  }
  if (record.star) {
    optionalUpdate += `, star = '${record.star}'`;
  }
  if (record.visual) {
    optionalUpdate += `, visual = '${record.visual}'`;
  }
  if (record.comment) {
    optionalUpdate += `, comment = '${record.comment}'`;
  }
  return `update ${tableName} set
  episode = '${record.episode}', 
  timestamp = '${record.timestamp}'
  ${optionalUpdate}
  where id = '${record.id}'`;
};
