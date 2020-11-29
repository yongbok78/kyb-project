import { PostCreateInput } from './post-create.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class PostUpdateInput extends PartialType(PostCreateInput) {
  @Field(() => Int)
  id: number;
}
