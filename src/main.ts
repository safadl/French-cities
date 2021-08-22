import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const port=process.env.PORT ||8080;
async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.enableCors();

  await app.listen(4000);
  Logger.log('Server running on port '+port)
  
}
bootstrap();
