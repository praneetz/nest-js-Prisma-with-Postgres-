import {IsString,IsEmail, IsNotEmpty, IsOptional, MinLength, Matches } from 'class-validator'

export class LoginUserDto{
    @IsString()
    @IsNotEmpty({ message: 'The  username is required'})
    username : string



    @IsString()
    @IsNotEmpty({message: 'The password is required'})
    password : string

    

}
