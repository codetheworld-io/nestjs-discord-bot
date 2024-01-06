import { NestFactory } from '@nestjs/core';
import { BotModule } from './bot/bot.module';

async function bootstrap() {
  await NestFactory.createApplicationContext(BotModule);
}

void bootstrap();
