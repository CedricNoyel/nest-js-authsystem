import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article, ArticleDocument } from './article.schema';
import { CreateArticleDTO } from './dto/article.dto';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name) private ArticleModel: Model<ArticleDocument>,
  ) {}

  async create(CreateArticleDTO: CreateArticleDTO): Promise<any> {
    const createdCat = new this.ArticleModel(CreateArticleDTO);
    return createdCat.save();
  }

  async findAll(): Promise<Article[]> {
    return this.ArticleModel.find().exec();
  }

  async findById(id): Promise<Article> {
    const customer = await this.ArticleModel.findById(id).exec();
    return customer;
  }

  async find(req): Promise<any> {
    return await this.ArticleModel.find(req).exec();
  }

  async update(id, CreateArticleDTO: CreateArticleDTO): Promise<any> {
    return await this.ArticleModel.findByIdAndUpdate(id, CreateArticleDTO, {
      new: true,
    });
  }

  async delete(id): Promise<any> {
    return await this.ArticleModel.findByIdAndRemove(id);
  }
}
