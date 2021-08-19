import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  posts = [
    {
      id: 1,
      title: 'My first post',
      content: 'This is my first post content',
    },
    {
      id: 2,
      title: 'My first post',
      content: 'This is my first post content',
    },
  ];

  findAll(): any[] {
    return this.posts;
  }

  findById(id: number): any {
    return this.posts.find((e) => e.id === id);
  }
}
