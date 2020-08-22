import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import configService from './config/config.service';
import AppController from './app.controller';
import AppService from './app.service';
import RepoModule from './repo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()[0]),
    RepoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export default class AppModule {}
