import {
  Args,
  Int,
  Mutation,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChidrenIncludes } from 'src/common/decorators.decorator';
import { User } from '../user/entities/user.entity';
import { PostCreateInput } from './dto/post-create.input';
import { PostUpdateInput } from './dto/post-update.input';
import { Post } from './entities/post.entity';
import { PostService } from './post.service';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => Post)
  createPost(@Args('PostCreateInput') data: PostCreateInput) {
    return this.postService.create(data);
  }

  @Query(() => [Post])
  posts(
    @Args('PostWhereInput') where: PostCreateInput,
    @ChidrenIncludes(['author']) include
  ) {
    return this.postService.findMany({ where, include });
  }

  @Query(() => Post)
  post(@Args('id', { type: () => Int }) id: number) {
    return this.postService.findUnique({ id });
  }

  @Mutation(() => Post)
  updatePost(@Args('PostUpdateInput') updateData: PostUpdateInput) {
    return this.postService.update({
      where: { id: updateData.id },
      data: updateData as Prisma.PostUpdateInput,
    });
  }

  @Mutation(() => Post)
  removePost(@Args('id', { type: () => Int }) id: number) {
    return this.postService.delete({ id });
  }

  @ResolveField(() => User)
  author(post: Post) {
    return post.author;
  }
}
