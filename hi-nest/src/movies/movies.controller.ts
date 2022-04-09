import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/createMovie.dto';
import { UpdateMovieDto } from './dto/updateMovie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  getALL(): Movie[] {
    return this.movieService.getAll();
  }
  // react router랑 똑같이 위에있는 함수가 우선순위를 갖는다.
  //   @Get('search')
  //   search(@Query('year') searchingYear: string) {
  //     return `we are searching for a mive with a title after : ${searchingYear}`;
  //   }
  // create generator
  @Get('/:id')
  getOne(@Param('id') movieId: number): Movie {
    console.log(typeof movieId);

    return this.movieService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.movieService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: number) {
    return this.movieService.deleteOne(movieId);
  }

  // 리소스의 일부분만 업데이트함
  // expressd에서는 리턴을 JSON으로 하려면 설정해야 했지만 nest에서는 자동으로 해준다.
  @Patch('/:id')
  patch(@Param('id') movieid: number, @Body() updateData: UpdateMovieDto) {
    return this.movieService.update(movieid, updateData);
  }
}
