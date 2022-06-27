
import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.prisma.user.findUnique({where:{username}});
    if(!user){
      return null
    }
    const isMatch = await bcrypt.compare(pass,user.password);
    if (user && isMatch) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const userFound=await this.validateUser(user.username,user.password)
    if(!userFound){
      return new HttpException("Wrong creds",400)
    }
    const payload = { username: userFound.username, id: userFound.id,role: userFound.role };
    return {
      access_token: this.jwtService.sign(payload),
      user:userFound
    };
  }
}
