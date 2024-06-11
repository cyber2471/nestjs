import { Module } from '@nestjs/common';
import { CtbWaitingListService } from './ctb_waiting_list.service';
import { CtbWaitingListResolver } from './ctb_waiting_list.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  providers: [CtbWaitingListService, CtbWaitingListResolver, PrismaService],
  exports: [],
})
export class CtbWaitingListModule {}