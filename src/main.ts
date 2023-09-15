import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS 미들웨어를 추가하여 모든 도메인에서의 요청을 허용
  app.enableCors({
    origin: 'http://localhost:3000',
  });
  await app.listen(3001);
}
bootstrap();
