import {IsString,IsEmail, IsNotEmpty, IsOptional, MinLength, Matches } from 'class-validator'

export class CreateUserDto{
    @IsString()
    @IsNotEmpty({ message: 'The  name is required'})
    name : string

    @IsEmail()
    @IsString()
    @IsNotEmpty({message: 'The user email is required'})
    email : string

    @IsOptional()
    @IsString()
    @IsNotEmpty({message: 'The address is required'})
    address : string

    @IsString()
    @IsNotEmpty({message: 'The username is required'})
    username : string

    
    @IsString()
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    @IsNotEmpty({message: 'The password is required'})
    @MinLength(10, {
        message: 'password is atleast 7 character long',
      })
    password : string

}
