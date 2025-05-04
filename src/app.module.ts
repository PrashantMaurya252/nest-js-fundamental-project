import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { DevConfigService } from './common/providers/DevConfigService';

@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [AppService,{
    provide:DevConfigService,
    useClass:DevConfigService
  }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // options 1 : for songs routes only
      consumer.apply(LoggerMiddleware).forRoutes('songs')

      // options2: if we want on certain type of requests

      // consumer.apply(LoggerMiddleware).forRoutes({path:'songs',method:RequestMethod.POST})

      // option3 
      // consumer.apply(LoggerMiddleware).forRoutes(SongsController)
  }
}
