import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('getAllpotato', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  // indivisual test??
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // test name , tested func
  it('should be 4', () => {
    expect(2 + 2).toEqual(4);
    // !toEqual(4) => result MoviesService › should be 4
  });
});
