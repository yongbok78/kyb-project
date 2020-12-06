import { PostCreateInput } from './post-create.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class PostUpdateInput extends PartialType(PostCreateInput) {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field({ description: '삭제 여부' })
  delete: false;
}
