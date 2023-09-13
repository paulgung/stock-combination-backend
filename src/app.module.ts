import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { ThsModule } from './ths/ths.module';

@Module({
  imports: [ThsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
