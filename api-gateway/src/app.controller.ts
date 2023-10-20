import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CartAddItemRequest } from "./cart-manage/cart-manage.interface";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/cart")
  async getAllItems() {
    return this.appService.getAllItems();
  }

  @Post("/cart")
  async addItem(@Body() item: CartAddItemRequest) {
    return this.appService.addItem(item);
  }

}
