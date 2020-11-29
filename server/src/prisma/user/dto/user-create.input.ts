import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserCreateInput {
  @Field({ nullable: true, description: '이름' })
  name?: string;
  @Field({ description: '아이디' })
  email: string;
}
