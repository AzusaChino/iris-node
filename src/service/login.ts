import { query } from "../utils/db";
import { LoginParam } from "../model";

const tableName = `tb_user`;

export const login = (param: LoginParam): Promise<string> => {
  return query(
    `select count(*) from ${tableName} where username = ${param.username} and password = ${param.password}`
  );
};
