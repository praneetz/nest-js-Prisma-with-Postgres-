import {IsString,IsEmail, IsNotEmpty, IsOptional, MinLength, Matches, IsBoolean, IsInt } from 'class-validator'

export class CreatePostDto{
    @IsString()
    @IsNotEmpty({ message: 'The  title is required'})
    title : string

    @IsOptional()
    @IsString()
    @IsNotEmpty({message: 'The content is required'})
    content : string

    @IsBoolean()
    published : boolean

    @IsInt()
    @IsNotEmpty({message: 'The authorId is required'})
    authorId : string

}
