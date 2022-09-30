import Application from "koa";
import Dotenv from "dotenv";
import { RouterConfig } from "./config/RouterConfig";

Dotenv.config();
const application: Application = new Application();
new RouterConfig(application);
application.listen(process.env.BASE_PORT, () =>
  console.log(`start server at ${process.env.BASE_URL}`)
);
