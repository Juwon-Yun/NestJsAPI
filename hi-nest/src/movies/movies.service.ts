import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }
  getOne(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === +id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID : ${id} not found`);
    }
    return movie;
  }
  deleteOne(id: string) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== +id);
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  // updateData의 유효성 검사를 하지 않았다.
  update(id: string, updateData) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    // 로직때문에 해킹방법으로 함
    this.movies.push({ ...movie, ...updateData });
  }
}
