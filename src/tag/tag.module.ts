import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { Tag, TagSchema } from './schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: Tag.name, schema: TagSchema }])],
  providers: [TagService],
  controllers: [TagController],
})
export class TagModule {}
