import { Controller, Get, Post, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}
  @Post()
  create(): any {
    return 'this action create a post';
  }

  @Get()
  findAll(): any[] {
    return this.postService.findAll();
  }

  @Get(':id')
  findById(@Param() params): any {
    console.log(params.id);
    return this.postService.findById(params.id);
  }
}
