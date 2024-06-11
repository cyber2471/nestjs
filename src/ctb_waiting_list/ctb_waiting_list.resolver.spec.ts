import { Test, TestingModule } from '@nestjs/testing';
import { CtbWaitingListResolver } from './ctb_waiting_list.resolver';

describe('CtbWaitingListResolver', () => {
  let resolver: CtbWaitingListResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CtbWaitingListResolver],
    }).compile();

    resolver = module.get<CtbWaitingListResolver>(CtbWaitingListResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
