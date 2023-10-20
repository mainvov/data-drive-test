import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import {Transport} from "@nestjs/microservices";

const getGrpcUrl = () => {
  const host = process.env.CART_VIEW_HOST || 'localhost';
  const port = process.env.CART_VIEW_PORT || 50052;

  return `${host}:${port}`;
}

async function bootstrap() {

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: getGrpcUrl(),
      package: 'cart_view',
      protoPath: join(__dirname, 'cart-view/cart-view.proto'),
    }
  })

  await app.listen();
}

bootstrap();
