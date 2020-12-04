import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class PostCreateInput {
  @Field({ description: '제목' })
  title: string;
  @Field({ nullable: true, description: '내용' })
  content?: string;
  @Field({ nullable: true, description: '발행여부' })
  published?: boolean;
}
