import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type WorkspaceDocument = Workspace & Document;

@Schema({ timestamps: true })
export class Workspace {
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
