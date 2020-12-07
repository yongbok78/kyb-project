import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChidrenIncludes } from 'src/common/decorators.decorator';
import { Post } from '../post/entities/post.entity';
import { UserCreateInput } from './dto/user-create.input';
import { UserUpdateInput } from './dto/user-update.input';
import { UserWhereInput } from './dto/user-where.input';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  qry?: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    include?: Prisma.UserInclude;
    orderBy?: Prisma.UserOrderByInput;
  };
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args('UserCreateInput') data: UserCreateInput) {
    return this.userService.create(data);
  }

  @Query(() => [User])
  users(
    @ChidrenIncludes(['posts']) include,
    @Args('where', { nullable: true, description: '조회조건' })
    where?: UserWhereInput
  ) {
    this.qry = { where, include };
    return this.userService.findMany(this.qry);
  }

  @Query(() => User)
  user(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findUnique({ id });
  }

  @Mutation(() => User)
  updateUser(@Args('UserUpdateInput') data: UserUpdateInput) {
    return this.userService.update(data);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.delete({ id });
  }

  @ResolveField(() => [Post])
  posts(@Parent() user: User): Post[] | null {
    return user.posts;
  }
}
