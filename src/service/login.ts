import pool from "../utils/db";
import { LoginParam } from "../model";
import ErrorHandler from "../model/error-handler";

const tableName = `tb_user`;

const login = (param: LoginParam): string => {
  pool.query(
    `select count(*) from ${tableName} where username = ${param.username} and password = ${param.password}`,
    (err, data) => {
      if (err) {
        throw new ErrorHandler(1001, "login failed");
      }
      if (data) {
        return "ok";
      }
    }
  );
  throw new ErrorHandler(1002, "login timeout");
};

export = login;
