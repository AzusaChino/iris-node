import pool from "../utils/db";
import { LoginParam } from "../model";
import { LoginError } from "../common/errors";

const tableName = `tb_user`;

export const login = (param: LoginParam): string => {
  pool.query(
    `select count(*) from ${tableName} where username = ${param.username} and password = ${param.password}`,
    (err, data) => {
      if (err) {
        throw new LoginError(1001, "login failed");
      }
      if (data) {
        return "ok";
      }
    }
  );
  throw new LoginError(1002, "login timeout");
};

