import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Table, Model, BelongsToMany, HasMany } from "sequelize-typescript";
import { Post } from "src/posts/posts.model";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs>{
    @ApiProperty({example: '1', description: 'Unique ID'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @ApiProperty({example: 'some@ya.ru', description: 'Email address'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;
    @ApiProperty({example: 'qwerty', description: 'Some password'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;
    @ApiProperty({example: true, description: 'Is user banned or not'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;
    @ApiProperty({example: 'Low violation', description: 'Reason of bann'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(()=> Role, ()=> UserRoles)
    roles: Role[];
    
    @HasMany(()=>Post)
    posts: Post[];
}