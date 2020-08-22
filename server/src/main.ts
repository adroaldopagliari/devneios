import { NestFactory } from '@nestjs/core';
// import './shared/infra/typeorm';
import AppModule from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3333);
}
bootstrap();
