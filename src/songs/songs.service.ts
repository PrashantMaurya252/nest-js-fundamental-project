import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DevConfigService } from 'src/common/providers/DevConfigService';

@Injectable()
export class SongsService {
    constructor(private devConfig:DevConfigService){}
    private readonly songs:any[] = [];

    create(song){
        this.songs.push(song)
        return this.songs
    }

    findAll(){
        try {
            console.log("Devconfig provider",this.devConfig.DBHOST)
            return this.songs
        } catch (error) {
            throw new HttpException(
                'server error',
                HttpStatus.INTERNAL_SERVER_ERROR,
                {
                    cause:error
                }
            )
        }
        
    }
}
