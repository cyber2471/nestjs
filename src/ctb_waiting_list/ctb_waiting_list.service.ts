import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CtbWaitingListCreatetDto } from './dto/ctb_waiting_list.dto';
import { CtbWaitingListModel } from './models/ctb_waiting_list.model';

@Injectable()
export class CtbWaitingListService {
  constructor(private readonly prisma: PrismaService) {}

  // 모든 사용자 조회
  async findManyUserAll(): Promise<CtbWaitingListModel[]> {
    return this.prisma.ctb_waiting_list.findMany();
  }


  // 사용자 등록
  async createCtbWaitingList(dto: CtbWaitingListCreatetDto): Promise<CtbWaitingListModel> {
    
    const formatTo14Digit = (date: Date): string => {
        const pad = (num: number): string => (num < 10 ? '0' : '') + num;
  
        const year = date.getFullYear();
        const month = pad(date.getMonth() + 1);
        const day = pad(date.getDate());
        const hours = pad(date.getHours());
        const minutes = pad(date.getMinutes());
        const seconds = pad(date.getSeconds());
  
        return `${year}${month}${day}${hours}${minutes}${seconds}`;
      };
  
      const currentTime = formatTo14Digit(new Date());

    return this.prisma.ctb_waiting_list.create({
      data: {
        ...dto,
        SEND_DTIME: currentTime,
        CREATE_DTIME: currentTime,
        LAST_DTIME: currentTime,
      },
    });
  }
}