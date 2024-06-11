import { Field, InputType } from '@nestjs/graphql';

@InputType({ description: '웨이팅 등록' })
export class CtbWaitingListCreatetDto {
  @Field(() => String, { description: '발송일자' })
  SEND_DATE: string;
  @Field(() => String, { description: '매장코드' })
  MS_NO: string;
  @Field(() => String, { description: '휴대폰번호' })
  HP_NO: string;
  @Field(() => Number, { description: '성인수' })
  ADULT_CNT: number;
  @Field(() => Number, { description: '유아수' })
  KIDS_CNT: number;
  @Field(() => String, { description: '처리구분' })
  PROC_FG: string;
  @Field(() => String, { description: '최초 등록자' })
  CREATE_ID: string;      
  @Field(() => String, { description: '최초 등록시간' })
  CREATE_DTIME: string;     
  @Field(() => String, { description: '최종 수정자' })
  LAST_ID: string;   
  @Field(() => String, { description: '최종 수정시간' })
  LAST_DTIME: string;          
}