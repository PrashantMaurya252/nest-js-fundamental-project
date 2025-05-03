import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
    constructor(private songsService:SongsService){}
    @Post()
  create(@Body() createSongDTO:CreateSongDTO) {
    return this.songsService.create(createSongDTO)
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
