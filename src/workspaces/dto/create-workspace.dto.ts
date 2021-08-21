import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';
import { User } from 'src/users/entities/user.entity';

export class CreateWorkspaceDto {
  @ApiProperty({
    description: 'The title of the article between 1 and 50 chars',
  })
  @IsNotEmpty()
  @Length(1, 50)
  title: string;

  @ApiProperty()
  description: string;

  @IsNotEmpty()
  @ApiProperty()
  createdBy: User;

  @ApiProperty()
  admins: [User];
}
