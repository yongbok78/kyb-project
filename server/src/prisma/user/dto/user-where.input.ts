import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserWhereInput {
  @Field({ nullable: true, description: '이름' })
  name?: string;
  @Field({ nullable: true, description: '이메일' })
  email?: string;
}
