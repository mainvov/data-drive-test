import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

const getGrpcUrl = () => {
  const host = process.env.CART_MANAGE_HOST || 'localhost';
  const port = process.env.CART_MANAGE_PORT || 50051;

  return `${host}:${port}`;
}

async function bootstrap() {

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: getGrpcUrl(),
      package: 'cart_manage',
      protoPath: join(__dirname, 'cart-manage/cart-manage.proto'),
    }
  })

  await app.listen();
}

bootstrap();
