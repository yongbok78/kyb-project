import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { UserCreateInput } from './dto/user-create.input';
import { UserUpdateInput } from './dto/user-update.input';

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

  create(input: UserCreateInput) {
    const { name, email, posts } = input;
    return this.prisma.user.create({
      data: {
        name,
        email,
        posts: {
          create: posts.map((p) => {
            const { title, content, published } = p;
            return { title, content, published };
          }),
        },
      },
      include,
    });
  }

  update(input: UserUpdateInput) {
    const { id, name, email, posts } = input;
    let createPosts: Prisma.PostCreateWithoutAuthorInput[] = [];
    let updatePosts: Prisma.PostUpdateWithWhereUniqueWithoutAuthorInput[] = [];
    let deletePosts: Prisma.PostWhereUniqueInput[] = [];

    posts.forEach((p) => {
      const { id, title, content, published } = p;
      let where = { id },
        data = { title, content, published };
      if (p.delete) {
        deletePosts.push(where);
      } else if (p.id) {
        updatePosts.push({ where, data });
      } else {
        createPosts.push(data);
      }
    });
    if (createPosts.length === 0) createPosts = undefined;
    if (updatePosts.length === 0) updatePosts = undefined;
    if (deletePosts.length === 0) deletePosts = undefined;

    return this.prisma.user.update({
      where: { id },
      data: {
        name,
        email,
        posts: {
          create: createPosts,
          update: updatePosts,
          delete: deletePosts,
        },
      },
      include,
    });
  }

  delete(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({ where, include });
  }
}
