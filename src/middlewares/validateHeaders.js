import config from "../config/config.js";
import { signData } from "../utils/signData.js";

const apiKey = config.apiKey;

function validateHeaders(req, res, next) {
  const date = req.headers["x-date"];
  const signature = req.headers["x-signature"];
  const authentication = req.headers["x-authentication"];

  if (!date || !signature || !authentication) {
    return res.status(400).json({ error: "Missing required headers" });
  }

  const dataToCompare = signData(req.originalUrl, date);
  if (signature !== dataToCompare) {
    return res.status(400).json({ error: "Invalid signature" });
  }

  if (authentication !== apiKey) {
    return res.status(400).json({ error: "Invalid API key" });
  }

  next();
}

export default validateHeaders;
