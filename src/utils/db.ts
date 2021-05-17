import mysql from "mysql";

const MYSQL_HOST = process.env.MYSQL_HOST as string;
const MYSQL_USERNAME = process.env.MYSQL_USERNAME as string;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD as string;
const MYSQL_DATABASE = process.env.MYSQL_DATABASE as string;

const pool = mysql.createPool({
  acquireTimeout: 5000,
  connectionLimit: 100,
  host: MYSQL_HOST,
  port: 3306,
  user: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
});

export = pool;
