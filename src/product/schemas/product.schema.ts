import { Category } from './../../category/schemas';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Tag } from './../../tag/schemas';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ max: 255, required: true })
  name: string;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  price: number;

  @Prop({ type: [{ type: Types.ObjectId, ref: Tag.name, autopopulate: true }] })
  tags: Types.Array<Tag>;

  @Prop({
    type: [{ type: Types.ObjectId, ref: Category.name, autopopulate: true }],
  })
  categories: Types.Array<Category>;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
