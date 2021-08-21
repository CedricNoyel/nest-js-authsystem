import {
  Controller,
  Get,
  Post,
  Res,
  Body,
  HttpStatus,
  Query,
  Put,
  NotFoundException,
  Delete,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDTO } from './dto/article.dto';

@Controller('Articles')
export class ArticlesController {
  constructor(private readonly ArticleService: ArticlesService) {}

  @Post()
  async addCustomer(@Res() res, @Body() CreateArticleDTO: CreateArticleDTO) {
    const list = await this.ArticleService.create(CreateArticleDTO);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Post has been created successfully', list });
  }

  @Get('all')
  async findAll() {
    return this.ArticleService.findAll();
  }

  @Get(':id')
  async findById(@Res() res, @Query('id') id: string) {
    const lists = await this.ArticleService.findById(id);
    if (!lists) throw new NotFoundException('Id does not exist!');
    return res.status(HttpStatus.OK).json(lists);
  }

  @Put()
  async update(
    @Res() res,
    @Query('id') id: string,
    @Body() CreateArticleDTO: CreateArticleDTO,
  ) {
    const lists = await this.ArticleService.update(id, CreateArticleDTO);
    if (!lists) throw new NotFoundException('Id does not exist!');
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Post has been successfully updated', lists });
  }

  @Delete(':id')
  async delete(@Res() res, @Query('id') id: string) {
    const lists = await this.ArticleService.delete(id);
    if (!lists) throw new NotFoundException('Id does not exist!');
    return res.status(HttpStatus.OK).json(lists);
  }
}
