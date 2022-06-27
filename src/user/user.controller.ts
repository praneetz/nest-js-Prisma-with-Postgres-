import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  Put,
  HttpException,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import { JwtAuthGuard } from 'src/auth/jwt/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  // @UsePipes(ValidationPipe)
  async addUser(@Body(new ValidationPipe()) body: CreateUserDto) {
    let hashPassword = await bcrypt.hash(body.password, 10);
    body.password=hashPassword
    return this.userService.createUser(body);
  }

  @Get(":id")
  async getuser(@Param("id",ParseIntPipe) id:number): Promise<User>{
    return this.userService.finduser(+id)
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllUsers():Promise<User[]>{
    return this.userService.findAllUser()
  }

  @Delete(":id")
  async deleteUser(@Param("id",ParseIntPipe) id:number):Promise<string>{
    await this.userService.deleteUser(id)
    return "User Deleted"
  }

  @Put(":id")
  async updateUser(@Param("id",ParseIntPipe) id:number, @Body(new ValidationPipe()) body:UpdateUserDto):Promise<User>{
    return this.userService.updateUser(id,body)
  }


}
