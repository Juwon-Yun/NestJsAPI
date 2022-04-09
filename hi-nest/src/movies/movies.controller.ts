import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getALL() {
    return 'this will return all movies';
  }
  // react router랑 똑같이 위에있는 함수가 우선순위를 갖는다.
  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `we are searching for a mive with a title after : ${searchingYear}`;
  }
  // create generator
  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id : ${movieId}`;
  }
 
  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return movieData;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id : ${movieId}`;
  }

  // 리소스의 일부분만 업데이트함
  // expressd에서는 리턴을 JSON으로 하려면 설정해야 했지만 nest에서는 자동으로 해준다.
  @Patch('/:id')
  patch(@Param('id') movieid: string, @Body() updateData) {
    return {
      updatedMovie: movieid,
      ...updateData,
    };
  }
}
