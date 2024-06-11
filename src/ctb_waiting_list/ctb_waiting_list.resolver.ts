import { Resolver, Query, Mutation, Args  } from '@nestjs/graphql';
import { CtbWaitingListService } from './ctb_waiting_list.service';
import { CtbWaitingListCreatetDto } from './dto/ctb_waiting_list.dto';
import { CtbWaitingListModel } from './models/ctb_waiting_list.model';


@Resolver()
export class CtbWaitingListResolver {
    constructor(private readonly ctbWaitingListService: CtbWaitingListService) {}

    @Query(() => [CtbWaitingListModel], { description: '웨이팅 리스트' })
    async findManyUserAll(): Promise<CtbWaitingListModel[]> {
      return this.ctbWaitingListService.findManyUserAll();
    }

  
    @Mutation(() => CtbWaitingListModel, { description: '웨이팅 등록' })
    async createCtbWaitingList(@Args('data') data: CtbWaitingListCreatetDto): Promise<CtbWaitingListModel> {
      return this.ctbWaitingListService.createCtbWaitingList(data);
    }   
}
