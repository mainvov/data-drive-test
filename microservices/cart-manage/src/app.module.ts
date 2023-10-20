import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from "@nestjs/config";
import { Cart } from "./cart-manage/cart.model";
import {CartManageModule} from "./cart-manage/cart-manage.module";

@Module({
  imports: [
      ConfigModule.forRoot({
          ignoreEnvFile: true,
          isGlobal: true,
      }),
      SequelizeModule.forRoot({
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        autoLoadModels: true,
        models: [Cart]
      }),
      CartManageModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
