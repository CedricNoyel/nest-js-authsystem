import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateArticleDTO {
  @ApiProperty({ description: 'The title of the article' })
  @IsNotEmpty()
  @Length(3, 100)
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(5, 270)
  description: string;

  @ApiProperty()
  author: string;

  @ApiProperty()
  tags: [string];

  @ApiProperty({ description: 'The image related to the article' })
  imageURL: string;
}
