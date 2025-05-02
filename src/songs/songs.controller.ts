import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
    @Post()
  create() {
    return 'create a new song endpoint';
  }
  @Get(':id')
  findOne() {
    return 'find one song from songs';
  }
  @Get()
  findAll() {
    return 'find all songs';
  }
  @Put(':id')
  UpdateOne() {
    return 'Updated one song';
  }
  @Delete(':id')
  delete() {
    return 'Deleted one song';
  }
}
