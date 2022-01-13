import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'some@ukr.net', description: 'Some valid Email address'})
    @IsString({message: 'This field must be string'})
    @IsEmail({}, {message: "Invalid email"})
    readonly email: string;
    @ApiProperty({example: 'qwerty', description: 'Some password'})
    @IsString({message: 'This field must be string'})
    @Length(4, 16, {message: 'Must be between 4 and 16'})
    readonly password: string;
}