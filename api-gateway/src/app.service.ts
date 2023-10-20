import {Injectable, OnModuleInit} from '@nestjs/common';
import {Client, ClientGrpc, Transport} from "@nestjs/microservices";

import {join} from "path";
import {CartAddItemRequest, CartManageService} from "./cart-manage/cart-manage.interface";
import {CartViewService} from "./cart-view/cart-view.interface";

@Injectable()
export class AppService implements OnModuleInit {
  @Client({
    transport: Transport.GRPC,
    options: {
      package: 'cart_view',
      protoPath: join(__dirname, 'cart-view/cart-view.proto'),
      url: `${process.env.CART_VIEW_HOST}:${process.env.CART_VIEW_PORT}`
    }

  })
  cartViewClient: ClientGrpc;

  @Client({
    transport: Transport.GRPC,
    options: {
      package: 'cart_manage',
      protoPath: join(__dirname, 'cart-manage/cart-manage.proto'),
      url: `${process.env.CART_MANAGE_HOST}:${process.env.CART_MANAGE_PORT}`
    }

  })
  cartManageClient: ClientGrpc;

  private cartViewService: CartViewService;
  private cartManageService: CartManageService;

  onModuleInit(): any {
    this.cartViewService = this.cartViewClient.getService<CartViewService>('CartViewService');
    this.cartManageService = this.cartManageClient.getService<CartManageService>('CartManageService');
  }

  async getAllItems() {
    return this.cartViewService.getAllItems({});
  }

  async addItem(item: CartAddItemRequest) {
    return await this.cartManageService.addItem(item);
  }
}
