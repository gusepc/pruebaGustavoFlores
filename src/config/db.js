import config from "./config.js";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
  port: config.dbport,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
