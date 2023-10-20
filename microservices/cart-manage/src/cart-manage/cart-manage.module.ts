import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {Cart} from "./cart.model";
import {CartManageService} from "./cart-manage-service";


@Module({
    imports: [SequelizeModule.forFeature([Cart])],
    exports: [],
    controllers: [CartManageService]
})
export class CartManageModule {}