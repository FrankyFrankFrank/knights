import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnightsController } from './knights/knights.controller';
import { KnightsService } from './knights/knights.service';

@Module({
  imports: [],
  controllers: [AppController, KnightsController],
  providers: [AppService, KnightsService],
})
export class AppModule {}
