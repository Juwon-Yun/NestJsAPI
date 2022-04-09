import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

// it's called decolator
// 클래스에 함수를 추가할 수 있다.
// controllers : url을 가져오고 함수를 실행함.
@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
