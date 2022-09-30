import { Next } from "koa";
import { Context } from "koa";
import { ApplicationWebController } from "./ApplicationWebController";

export class IndexController extends ApplicationWebController {
  index = async (ctx: Context, next: Next) => {
    await ctx.render("index", {
      currentDate: new Date(),
    });
  };
}
