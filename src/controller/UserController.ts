import { Prisma } from "@prisma/client";
import { UserModel } from "./../model/UserModel";
import { Next } from "koa";
import { Context } from "koa";
import { ApplicationController } from "./ApplicationController";

export class UserController extends ApplicationController {
  constructor(private userModel = new UserModel(true)) {
    super();
  }
  index = async (ctx: Context, next: Next) => {
    const { id }: { id: string } = ctx.params;

    if (id) return (ctx.body = await this.userModel.find({ id: Number(id) }));
    ctx.body = await this.userModel.filter();
  };

  create = async (ctx: Context, next: Next) => {
    const { user } = ctx.request.body;
    ctx.body = await this.userModel.create(user);
  };

  update = async (ctx: Context, next: Next) => {
    const { user }: { user: Prisma.UserUpdateInput } = ctx.request.body;
    const { id }: { id: string } = ctx.params;
    const findUser = await this.userModel.find({ id: Number(id) });
    if (findUser) ctx.body = await this.userModel.update(Number(id), user);
  };

  destroy = async (ctx: Context, next: Next) => {
    ctx.body = await this.userModel.destroy();
  };
}
