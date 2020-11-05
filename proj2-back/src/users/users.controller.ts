import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserConsultDto } from './dto/consultUser.dto';
import { UserCreateDto } from './dto/createUser.dto';


import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    
    @Post("/signup")
    roundCreate(@Body() userCreateDto: UserCreateDto) {
        console.log(userCreateDto);
        return this.usersService.create(userCreateDto);
        
    }


    @Get()
    getUsers() {
        return this.usersService.findAll();
    }

}
