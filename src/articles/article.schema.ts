import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ArticleDocument = Article & Document;

@Schema({ timestamps: true })
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
  imageUrl: string;

  @Prop([String])
  tags: string[];
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
