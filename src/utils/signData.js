import config from "../config/config.js";
import crypto from "crypto";

const secretKey = config.secretKey;

export function signData(url, date) {
  const data = `${url + date}`;
  return crypto.createHmac("sha256", secretKey).update(data).digest("hex");
}
