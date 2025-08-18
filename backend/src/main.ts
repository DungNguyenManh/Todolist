import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const origins =
    process.env.FRONTEND_ORIGINS
      ?.split(',')
      .map(s => s.trim())
      .filter(Boolean);

  app.enableCors({ origin: origins?.length ? origins : true, credentials: true });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  await app.listen(Number(process.env.PORT) || 3001);
}
bootstrap();