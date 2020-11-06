import { Body, Controller, Delete, Get, Param, Post, Redirect, Res } from '@nestjs/common';
import { UserConsultDto } from './dto/consultUser.dto';
import { UserCreateDto } from './dto/createUser.dto';
import { HttpService } from '@nestjs/common';



import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService, private httpService: HttpService) {}

    @Post("/login")
    auth(@Body() userConsultDto: UserConsultDto){
        return this.usersService.auth(userConsultDto);
    }


    @Post("/signup")
    @Redirect("localhost:3003/favorite/create", 201)
    userCreate(@Body() userCreateDto: UserCreateDto) {
        
        console.log(userCreateDto);
        this.usersService.create(userCreateDto);
        return {url: "localhost:3003/favorite/create/"+ userCreateDto.username}
    }

    @Delete("/delete/:user")
    userDelete(@Param("user") user: string) {
        return this.usersService.delete(user);
    }
   
   

    @Get()
    getUsers() {
        return this.usersService.findAll();
    }

}
