import { UserController } from "./../controller/UserController";
import Application from "koa";
import BodyParser from "koa-body";
import Router from "@koa/router";

export class RouterConfig {
  constructor(
    private application: Application,
    private apiRoute = new Router({
      prefix: "/api",
    })
  ) {
    this.registerRoutes();
  }

  registerRoutes = (): void => {
    const userRoute: Router = new Router()
      .get("/", new UserController().index)
      .get("/:id",  new UserController().index)
      .post("/", new UserController().create)
      .delete("/", new UserController().destroy)
      .put("/:id", new UserController().update);

    this.apiRoute.use("/user", userRoute.routes(), userRoute.allowedMethods());

    this.application
      .use(BodyParser())
      .use(this.apiRoute.routes())
      .use(this.apiRoute.allowedMethods());
  };
}
