import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: '웨이팅 리스트' })
export class CtbWaitingListModel {
    @Field(() => String, { description: '발송일자' })
    SEND_DATE: string;
    @Field(() => String, { description: '매장코드' })
    MS_NO: string;
    @Field(() => Int, { description: '대기순번' })
    SEQ: number;
    @Field(() => String, { description: '휴대폰번호' })
    HP_NO: string;
    @Field(() => Int, { description: '성인수' })
    ADULT_CNT: number;
    @Field(() => Int, { description: '유아수' })
    KIDS_CNT: number;
    @Field(() => String, { description: '발송시간' })
    SEND_DTIME: string;
    @Field(() => String, { description: '처리구분' })
    PROC_FG: string;
    @Field(() => String, { description: '최초 등록자' })
    CREATE_ID: string;      
    @Field(() => String, { description: '최종 수정자' })
    LAST_ID: string;    
}
