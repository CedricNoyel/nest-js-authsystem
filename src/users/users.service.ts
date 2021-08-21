import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userEntity: Model<UserDocument>,
  ) {}

  async create(CreateUserDto: CreateUserDto): Promise<any> {
    const user = new this.userEntity(CreateUserDto);
    return user.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userEntity.find().exec();
  }

  async findOne(id): Promise<User> {
    const user = await this.userEntity.findById(id).exec();
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.userEntity.findOne({ email }).exec();
    return user;
  }

  async find(req): Promise<any> {
    return await this.userEntity.find(req).exec();
  }

  async update(id, UpdateUserDto: UpdateUserDto): Promise<any> {
    return await this.userEntity.findByIdAndUpdate(id, UpdateUserDto, {
      new: true,
    });
  }

  async delete(id): Promise<any> {
    return await this.userEntity.findByIdAndRemove(id);
  }
}
