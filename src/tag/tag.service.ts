import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateTagDto } from './dtos';
import { Tag, TagDocument } from './schemas';
import { Model } from 'mongoose';

@Injectable()
export class TagService {
  constructor(@InjectModel(Tag.name) private tagModel: Model<TagDocument>) {}

  async findAll(): Promise<TagDocument[]> {
    return this.tagModel.find().exec();
  }

  async create(createTagDto: CreateTagDto) {
    const tag = new this.tagModel(createTagDto);
    return tag.save();
  }
}
