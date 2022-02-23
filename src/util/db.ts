import { createPool } from "mysql2";
import { config } from "dotenv";

config();
const DB = createPool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.SCHEMA,
  password: process.env.PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  namedPlaceholders: true,
  multipleStatements: true,
}).promise();

export { DB };
