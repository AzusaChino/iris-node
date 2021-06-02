import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

const MYSQL_HOST = process.env.MYSQL_HOST as string;
const MYSQL_PORT = Number(process.env.MYSQL_PORT);
const MYSQL_USERNAME = process.env.MYSQL_USERNAME as string;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD as string;
const MYSQL_DATABASE = process.env.MYSQL_DATABASE as string;

const pool = mysql.createPool({
  acquireTimeout: 5000,
  connectionLimit: 100,
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  user: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
});

export const query = <T>(sql: string): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if (err) {
        console.error(err);
        reject(err);
      }
      conn.query(sql, (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve(rows);
        conn.release();
      });
    });
  });
};

export default pool;
