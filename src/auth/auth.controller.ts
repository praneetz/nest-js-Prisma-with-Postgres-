
import { Controller, Request, Post, UseGuards, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("login")
  async login(@Body(new ValidationPipe()) body:LoginUserDto) {
    return this.authService.login(body);
  }
}


