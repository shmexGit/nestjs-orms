import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app/app.module';

import { getAppConfig } from './configs/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = getAppConfig(app.get(ConfigService));
  await app.listen(config.port, config.host);
}

bootstrap();
