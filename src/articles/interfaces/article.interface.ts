import { Document } from 'mongoose';

export interface Article extends Document {
  readonly title: string;
  readonly description: string;
  readonly author: string;
  readonly tags: [string];
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
