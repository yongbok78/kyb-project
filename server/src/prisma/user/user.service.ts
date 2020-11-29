import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

const include = { posts: true };
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  findUnique(where: { id?: number; email?: string }) {
    return this.prisma.user.findUnique({ where, include });
  }

  findMany(qry: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    include?: Prisma.UserInclude;
    orderBy?: Prisma.UserOrderByInput;
  }) {
    return this.prisma.user.findMany(qry);
  }

  create(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data, include });
  }

  update(args: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }) {
    const { where, data } = args;
    return this.prisma.user.update({ data, where, include });
  }

  delete(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({ where, include });
  }
}
