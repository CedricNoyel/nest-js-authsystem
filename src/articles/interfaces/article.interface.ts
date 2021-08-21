import { Document } from 'mongoose';

export interface Article extends Document {
  readonly title: string;
  readonly created_at: Date;
}
