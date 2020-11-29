import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

const include = { author: true };
@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  findUnique(where: { id: number }) {
    return this.prisma.post.findUnique({ where, include });
  }

  findMany(qry: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PostWhereUniqueInput;
    where?: Prisma.PostWhereInput;
    include?: Prisma.PostInclude;
    orderBy?: Prisma.PostOrderByInput;
  }) {
    return this.prisma.post.findMany(qry);
  }

  create(data: Prisma.PostCreateInput) {
    return this.prisma.post.create({ data, include });
  }

  update(args: {
    where: Prisma.PostWhereUniqueInput;
    data: Prisma.PostUpdateInput;
  }) {
    const { where, data } = args;
    return this.prisma.post.update({ where, data, include });
  }

  delete(where: Prisma.PostWhereUniqueInput) {
    return this.prisma.post.delete({ where, include });
  }
}
