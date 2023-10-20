import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table({tableName: 'cart'})
export class Cart extends Model {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING})
    name: string;

    @Column({type: DataType.DECIMAL(10, 2)})
    price: number;
}