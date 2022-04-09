import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './createMovie.dto';

// export class UpdateMovieDto {
//   @IsString()
//   readonly title?: string;
//   @IsNumber()
//   readonly year?: number;
//   @IsString({ each: true })
//   readonly genres?: string[];
// }

//PartialType
// 타입을 변환시키고 사용할 수 있게 하는 nest.js 라이브러리
// not require type으로 만들어줌
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
