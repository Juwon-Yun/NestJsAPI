import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

// it's same express.js router
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // it's call get decolator
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/hello')
  sayHello(): string {
    return 'Hello Nest everyond';
  }
}
