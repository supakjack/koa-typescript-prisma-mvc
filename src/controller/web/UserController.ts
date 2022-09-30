import { Prisma, User } from "@prisma/client";
import { UserModel } from "./../../model/UserModel";
import { Next } from "koa";
import { Context } from "koa";
import { ApplicationWebController } from "./ApplicationWebController";

export class UserController extends ApplicationWebController {
  constructor(private userModel = new UserModel(true)) {
    super();
  }
  index = async (ctx: Context, next: Next) => {
    const { id }: { id: string } = ctx.params;
    let user: User | null = null;
    let users: User[] = [];

    if (id) user = await this.userModel.find({ id: Number(id) });
    else users = await this.userModel.filter();

    await ctx.render("user/index", {
      user,
      users,
    });
  };
}
