import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateArticleDTO {
  @ApiProperty({ description: 'The title of the article' })
  @IsNotEmpty()
  @Length(3, 100)
  readonly title: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(5, 270)
  readonly description: string;

  @ApiProperty()
  readonly author: string;

  @ApiProperty()
  readonly tags: [string];

  @ApiProperty({ description: 'The image related to the article' })
  readonly imageURL: string;
}
