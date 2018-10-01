import {Column, Model, Table} from 'sequelize-typescript';

@Table({tableName: 'tb_user'})
export class User extends Model<User> {
    @Column
    name: string;
}