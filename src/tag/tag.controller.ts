import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateTagDto } from './dtos';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
  constructor(private tagService: TagService) {}

  @Get()
  async findAll() {
    return this.tagService.findAll();
  }

  @Post('create')
  async create(@Body() createTagDto: CreateTagDto) {
    return this.tagService.create(createTagDto);
  }
}
