import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
    constructor(private songsService:SongsService){}
    @Post()
  create() {
    return this.songsService.create('Animals by Martin Garrix')
  }
  @Get(':id')
  findOne() {
    return 'find one song from songs';
  }
  @Get()
  findAll() {
    return this.songsService.findAll();
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
