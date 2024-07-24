import express from "express";
import usersRouter from "./src/routes/users.routes.js";
import validateHeaders from "./src/middlewares/validateHeaders.js";
import setHeaders from "./src/middlewares/setHeaders.js";
import config from "./src/config/config.js";
import getRoot from "./src/controllers/routerController.js";
import { addLogger } from "./src/utils/logger.js";

const app = express();

app.disable("x-powered-by");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(addLogger);

app.use("/headers", setHeaders, validateHeaders, usersRouter);
app.use("/users", validateHeaders, usersRouter);
app.use("/", getRoot);

app.listen(config.port, () => {
  console.log(`Server running on PORT: ${config.port}`);
});
