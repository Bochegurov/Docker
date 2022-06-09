import { Controller, Get, Post } from '@nestjs/common';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Post()
  create(body: any): Promise<UserEntity> {
    console.log(body);
    return this.userService.createUser(body);
  }
}
