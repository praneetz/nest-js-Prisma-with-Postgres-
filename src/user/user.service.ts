import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async finduser(id:number):Promise<User>{
    return await this.prisma.user.findUnique({
      where:{id:id}
    })
  }

  async findAllUser():Promise<User[]>{
    return this.prisma.user.findMany({})
  }

  async deleteUser(id:number):Promise<User>{
    return this.prisma.user.delete({where:{id}})
  }

  async updateUser(id:number,data:object):Promise<User>{
    return this.prisma.user.update({where:{id},data})
  }
}
