import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/prisma/user/entities/user.entity';

@ObjectType()
export class Post {
  @Field(() => Int, { description: '아이디' })
  id: number;
  @Field({ description: '제목' })
  title: string;
  @Field({ nullable: true, description: '내용' })
  content?: string;
  @Field({ description: '발행여부' })
  published: boolean;
  @Field(() => User, { description: '인증 사용자' })
  author: User;
}
