import { Field, InputType } from '@nestjs/graphql';
import { PostCreateInput } from 'src/prisma/post/dto/post-create.input';

@InputType()
export class UserCreateInput {
  @Field({ nullable: true, description: '이름' })
  name?: string;
  @Field({ description: '이메일' })
  email: string;
  @Field(() => [PostCreateInput], {
    nullable: 'itemsAndList',
    description: '배포자',
  })
  posts?: PostCreateInput[];
}
