import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { ThsModule } from './ths/ths.module';
import * as cors from 'cors';

@Module({
  imports: [ThsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // 允许所有域名跨域访问
    consumer.apply(cors()).forRoutes('*');
  }
}
