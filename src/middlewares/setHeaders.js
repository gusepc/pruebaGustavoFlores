import config from "../config/config.js";
import { signData } from "../utils/signData.js";

const apiKey = config.apiKey;

function setHeaders(req, res, next) {
  const date = new Date().toUTCString();
  const signature = signData(req.originalUrl, date);

  req.headers["x-date"] = date;
  req.headers["x-signature"] = signature;
  req.headers["x-authentication"] = apiKey;

  req.logger.info(`Headers set - Date: ${date}, Signature: ${signature}, authentication: ${apiKey}`);

  next();
}

export default setHeaders;
