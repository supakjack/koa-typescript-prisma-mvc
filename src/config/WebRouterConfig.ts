import { UserController } from "../controller/web/UserController";
import { IndexController } from "../controller/web/IndexController";
import Application from "koa";
import Router from "@koa/router";

export class WebRouterConfig {
  constructor(
    private application: Application,
    private webRoute = new Router()
  ) {
    this.registerRoutes();
  }

  registerRoutes = (): void => {
    const userRoute: Router = new Router()
      .all("/", new UserController().index)
      .all("/:id", new UserController().index);

    const indexRoute: Router = new Router()
      .all("/",new IndexController().index);

    this.webRoute.use("/user", userRoute.routes(), userRoute.allowedMethods());
    this.webRoute.use("/", indexRoute.routes(), indexRoute.allowedMethods());

    this.application
      .use(this.webRoute.routes())
      .use(this.webRoute.allowedMethods());
  };
}
