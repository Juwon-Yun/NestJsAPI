import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getALL() {
    return 'this will return all movies';
  }

  // create generator
  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id : ${movieId}`;
  }

  @Post()
  create() {
    return 'this will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id : ${movieId}`;
  }

  // 리소스의 일부분만 업데이트함
  @Patch('/:id')
  patch(@Param('id') movieid: string) {
    return `this will patch a movie with the id ${movieid}`;
  }
}
