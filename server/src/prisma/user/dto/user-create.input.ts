import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserCreateInput {
  @Field({ nullable: true, description: '이름' })
  name?: string;
  @Field({ description: '이메일' })
  email: string;
}
