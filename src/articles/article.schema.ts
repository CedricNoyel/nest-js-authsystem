import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ArticleDocument = Article & Document;

@Schema()
export class Article {
  @Prop()
  id: number;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  author: string;

  @Prop()
  imageURL: string;

  @Prop([String])
  tags: string[];

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
