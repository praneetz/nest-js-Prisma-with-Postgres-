import {IsString, IsNotEmpty, IsOptional, MinLength, Matches } from 'class-validator'

export class UpdateUserDto{
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'The  name is required'})
    name : string

    @IsOptional()
    @IsString()
    @IsNotEmpty({message: 'The address is required'})
    address : string

    @IsOptional()
    @IsString()
    @IsNotEmpty({message: 'The username is required'})
    username : string

    @MinLength(10, {
        message: 'password is atleast 7 character long',
      })
    @IsOptional()
    @IsString()
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    @IsNotEmpty({message:"Password is required"})
    password: string
}
