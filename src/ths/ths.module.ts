import { Module } from '@nestjs/common';
import { ThsService } from './ths.service';
import { ThsController } from './ths.controller';

@Module({
  controllers: [ThsController],
  providers: [ThsService],
})
export class ThsModule {}
