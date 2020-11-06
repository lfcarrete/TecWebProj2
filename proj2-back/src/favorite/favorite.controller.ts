import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Long } from 'mongodb';
import { FavoriteCreatetDto } from './dto/createFavorite.dto';
import { FavoriteService } from './favorite.service';

@Controller('favorite')
export class FavoriteController {
    constructor(private favoriteService: FavoriteService) {}
    
    @Post("/create/:user")
    favoriteCreate(@Param() user: string) {
        console.log(user);
        return this.favoriteService.create(user);
    }
    
    @Patch("/update/:user/:country") 
    favoriteUpdate(@Param("user") user: string, @Param("country") country: string) {
        return this.favoriteService.update(user, country);
    }
    
    @Get()
    getFavorites() {
        return this.favoriteService.findAll();
    }

    @Delete("/delete/:user/:country")
    favoriteDelete(@Param("user") user: string , @Param("country") country: string) {
        return this.favoriteService.delete(user, country);
    }
}
