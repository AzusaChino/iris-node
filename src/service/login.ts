import { query } from "../utils/db";
import { LoginParam } from "../model";

const tableName = `tb_user`;

type CountUser = {
  cnt: number;
};

export const login = (param: LoginParam): Promise<Array<CountUser>> => {
  return query(
    `select count(*) as cnt from ${tableName} where username = '${param.username}' and password = '${param.password}'`
  );
};
