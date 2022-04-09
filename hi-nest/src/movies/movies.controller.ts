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
  //의존성 주입하는 부분, typescript의 장점이 또 하나 생겼다.
  constructor(private readonly movieService: MoviesService) {}

  // nest.js는 node.js 위에서 돌아가기 때문에 express의 기능도 사용할 수 있다.
  // getAll(@Req req, @Res, res) : Movie[] { }
  // Nest.js는 express와 Fastify 두개의 프레임워크 위에서 작동한다.
  // 그렇기에 nest.js는 Fastify 프레임워크로 전환해 사용할 수 있다.
  // Fastify는 express보다 2배는 빠르다.
  // 성능 향상을 위해서는 nest.js기반의 Fastify를 추천함.

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
