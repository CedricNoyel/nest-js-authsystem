import {
  Res,
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Res() res, @Body() CreateUserDto: CreateUserDto) {
    const list = await this.usersService.create(CreateUserDto);
    return res.status(HttpStatus.OK).json({ message: 'User created successfully', list });
  }

  @Get('all')
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findById(@Res() res, @Query('id') id: string) {
    const lists = await this.usersService.findOne(id);
    if (!lists) throw new NotFoundException('Id does not exist!');
    return res.status(HttpStatus.OK).json(lists);
  }

  @Patch(':id')
  async update(@Res() res, @Query('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const lists = await this.usersService.update(id, updateUserDto);
    if (!lists) throw new NotFoundException('Id does not exist!');
    return res.status(HttpStatus.OK).json(lists);
  }

  @Delete(':id')
  async remove(@Res() res, @Query('id') id: string) {
    const lists = await this.usersService.delete(id);
    if (!lists) throw new NotFoundException('Id does not exist!');
    return res.status(HttpStatus.OK).json(lists);
  }
}
