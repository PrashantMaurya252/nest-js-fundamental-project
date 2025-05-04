import { Body, Controller, Delete, Get, HttpStatus, Inject, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { Connection } from 'src/common/constants/connection';

@Controller('songs')
export class SongsController {
    constructor(private songsService:SongsService,@Inject('CONNECTION') private connection:Connection){
      console.log(`THIS IS CONNECTION STRING ${this.connection.CONNECTION_STRING}`)
    }
    @Post()
  create(@Body() createSongDTO:CreateSongDTO) {
    return this.songsService.create(createSongDTO)
  }
  @Get(':id')
  findOne(
    // @Param('id',ParseIntPipe)  // option 1
    // @Param('id')
    // id:number
    @Param(
      'id',
      new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE}),
    )
    id:number,
  ) {
    return `find one song from songs based on id ${typeof id}`;
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
