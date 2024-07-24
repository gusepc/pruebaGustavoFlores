import dotenv from "dotenv";

dotenv.config();
export default {
  port: process.env.PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dbport: process.env.DB_PORT,
  secretKey: process.env.SECRET_KEY,
  apiKey: process.env.API_KEY,
};
