import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {Cart} from "./cart.model";
import {CartViewService} from "./cart-view.service";


@Module({
    imports: [SequelizeModule.forFeature([Cart])],
    exports: [],
    controllers: [CartViewService]
})
export class CartViewModule {}