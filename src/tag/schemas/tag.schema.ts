import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TagDocument = Tag & Document;

@Schema()
export class Tag {
  @Prop({ required: true })
  name: string;
}

export const TagSchema = SchemaFactory.createForClass(Tag);
