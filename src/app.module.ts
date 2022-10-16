import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnightsController } from './knights/knights.controller';

@Module({
  imports: [],
  controllers: [AppController, KnightsController],
  providers: [AppService],
})
export class AppModule {}
