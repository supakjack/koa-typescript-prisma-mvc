import { UserController } from "../controller/api/UserController";
import Application from "koa";
import Router from "@koa/router";

export class ApiRouterConfig {
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
      .use(this.apiRoute.routes())
      .use(this.apiRoute.allowedMethods());
  };
}
