import { Prisma, User } from "@prisma/client";
import { ApplicationModel } from "./ApplicationModel";

export class UserModel extends ApplicationModel {
  find = async (where?: Prisma.UserWhereInput): Promise<User | null> => {
    return await this.model.user.findFirst({
      where,
    });
  };

  filter = async (where?: Prisma.UserWhereInput): Promise<User[]> => {
    return await this.model.user.findMany({
      where,
    });
  };

  create = async (data: Prisma.UserCreateInput) => {
    return await this.model.user.create({
      data,
    });
  };

  update = async (id: number, data: Prisma.UserUpdateInput) => {
    return await this.model.user.update({
      where: { id },
      data,
    });
  };

  destroy = async (
    where?: Prisma.UserWhereInput
  ): Promise<Prisma.BatchPayload> => {
    return await this.model.user.deleteMany({
      where,
    });
  };
}
