import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from "@nestjs/common";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

const logger = new Logger('ApiGateway');

async function bootstrap() {
  const PORT = process.env.API_GATEWAY_PORT || 3000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
      .setTitle('Simple REST + gRPC test')
      .setDescription('Rest API Documentation')
      .setVersion('1.0.0')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT, () => {
    logger.log(`Server started on port: ${PORT}`)
  });
}

bootstrap();
