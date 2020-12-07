import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

/*
 * @param data 데이타
 */
export const ChidrenIncludes = createParamDecorator(
  (data: Array<string> | [], ctx: ExecutionContext) => {
    let chidren: Array<string> = GqlExecutionContext.create(ctx)
      .getInfo()
      .fieldNodes[0].selectionSet.selections.map(
        (o: { name: { value: string } }) => o.name.value
      );

    if (data) {
      let includes = {};
      for (let s of data) {
        if (chidren.includes(s)) includes[s] = true;
      }
      return Object.keys(includes).length > 0 ? includes : undefined;
    } else {
      return undefined;
    }
  }
);
