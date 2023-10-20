import {Controller, Logger} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {Cart} from "./cart.model";
import {GrpcMethod} from "@nestjs/microservices";

@Controller()
export class CartViewService {
    constructor(
        @InjectModel(Cart)
        private cart: typeof Cart
    ) {
    }

    @GrpcMethod('CartViewService', 'GetAllItems')
    async getAllItems() {
        const items = await this.cart.findAll();
        return { items };
    }
}