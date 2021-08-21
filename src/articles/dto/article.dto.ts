import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDTO {
  @ApiProperty()
  //   @IsNotEmpty({ message: 'The article must have a title !' })
  readonly title: string;
}
