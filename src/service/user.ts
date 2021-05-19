import { User } from "../model/index";
import { query } from "../utils/db";

const tableName = `tb_user`;

export const getUser = (username: string): Promise<Array<User>> => {
  return query(`select * from ${tableName} where username = '${username}'`);
};
