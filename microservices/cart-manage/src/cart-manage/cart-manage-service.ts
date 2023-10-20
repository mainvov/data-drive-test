import {Controller} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {Cart} from "./cart.model";
import {CartAddRequest} from "./cart-manage.interface";
import {GrpcMethod} from "@nestjs/microservices";

@Controller()
export class CartManageService {
    constructor(
        @InjectModel(Cart)
        private cart: typeof Cart
    ) {
    }

    @GrpcMethod('CartManageService', 'AddItem')
    async addItem(item: CartAddRequest) {
        return await this.cart.create({...item}, {});
    }
}