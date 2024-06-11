import { Test, TestingModule } from '@nestjs/testing';
import { CtbWaitingListService } from './ctb_waiting_list.service';

describe('CtbWaitingListService', () => {
  let service: CtbWaitingListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CtbWaitingListService],
    }).compile();

    service = module.get<CtbWaitingListService>(CtbWaitingListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
