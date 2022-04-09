import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 유효성 검사 파이프, 미들웨어임
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
