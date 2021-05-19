import { query } from "../utils/db";
import { LoginParam } from "../model";
import { CountResult } from "../common";

const tableName = `tb_user`;

export const login = async (param: LoginParam): Promise<boolean> => {
  const result: CountResult = await query(
    `select count(*) as cnt from ${tableName} where username = '${param.username}' and password = '${param.password}'`
  );
  return result && result.length == 1;
};
