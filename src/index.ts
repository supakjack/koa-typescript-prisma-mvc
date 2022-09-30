import Application from "koa";
import BodyParser from "koa-body";
import Dotenv from "dotenv";
import { ApiRouterConfig } from "./config/ApiRouterConfig";
import { WebRouterConfig } from "./config/WebRouterConfig";
import { ViewConfig } from "./config/ViewConfig";

Dotenv.config();
const application: Application = new Application();
application.use(BodyParser())

new ViewConfig(application);
new WebRouterConfig(application);
new ApiRouterConfig(application);
application.listen(process.env.BASE_PORT, () =>
  console.log(`start server at ${process.env.BASE_URL}`)
);
