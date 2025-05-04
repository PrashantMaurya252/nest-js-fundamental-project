import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { connection } from 'src/common/constants/connection';
import { DevConfigService } from 'src/common/providers/DevConfigService';

const mockSongService = {
  findAll(){
    return [{id:1,title:'Lasting Lover'}]
  },
}

@Module({
  controllers: [SongsController],
  providers: [
    SongsService,
    // {
    //   provide:SongsService,
    //   useClass:SongsService
    // }
    // {
    //   provide:SongsService,
    //   useValue:mockSongService
    // }
    {
      provide:'CONNECTION',
      useValue:connection
    },
    {
      provide:DevConfigService,
      useClass:DevConfigService
    }
  ]
})
export class SongsModule {}
