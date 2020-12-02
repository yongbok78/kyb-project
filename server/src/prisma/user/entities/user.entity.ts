import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from 'src/prisma/post/entities/post.entity';

@ObjectType()
export class User {
  @Field(() => Int, { description: '아이디' })
  id: number;
  @Field({ nullable: true, description: '이름' })
  name?: string;
  @Field({ description: '이메일' })
  email: string;
  @Field(() => [Post], { nullable: 'itemsAndList', description: '배포자' })
  posts?: Post[];
}
