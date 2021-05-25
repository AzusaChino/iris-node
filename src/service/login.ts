import { query } from "../utils/db";
import { LoginParam, RegisterParam } from "../model";
import { CountResult, InsertResult } from "../common";
import { uuid } from "../utils";

const tableName = `tb_user`;

export const login = async (param: LoginParam): Promise<boolean> => {
  const result: CountResult = await query(
    `select count(*) as cnt from ${tableName} where username = '${param.username}' and password = '${param.password}'`
  );
  return result && result.length == 1;
};

export const register = async (param: RegisterParam): Promise<boolean> => {
  const uid = uuid();
  const sql = `insert into ${tableName}(id, username, email, password, avatar) values('${uid}', '${param.username}', '${param.email}', '${param.password}', '')`;
  const result: InsertResult = await query(sql);
  return !!result.insertId;
};
