import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

// 앱을 만들 때 모듈로 분리해야 좋다.
// 그래서 app.module 에서 movies 모듈을 import하게 한 뒤
// controllers와 providers를 여기서 주입한다.
// nest.js의 typescript 기반 의존성 주입을 한다.
@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
