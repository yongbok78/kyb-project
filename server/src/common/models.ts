import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PageInfo {
  @Field(() => Int, { description: '총 데이타 갯수' })
  totalCnt: number;
  @Field(() => Int, { description: '페이지 번호' })
  no: number;
  @Field(() => Int, { description: '한 페이지에 표시할 데이타 갯수' })
  listSize: number;
}
