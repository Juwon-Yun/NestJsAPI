import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 유효성 검사 파이프, 미들웨어임
  app.useGlobalPipes(
    new ValidationPipe({
      // 이상한 요청이라면 validator에 도착하지도 않게함
      whitelist: true,
      // 이상한 요청이라면 request를 막아버림
      forbidNonWhitelisted: true,
      // 클라이언트가 보낸 요청의 타입을 맞게 변환해줌
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
