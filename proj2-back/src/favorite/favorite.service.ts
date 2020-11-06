import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Long } from 'mongodb';
import { Model } from 'mongoose';
import { runInThisContext } from 'vm';
import { FavoriteCreatetDto } from './dto/createFavorite.dto';
import { Favorite, FavoriteDocument } from './favorite.schema';

@Injectable()
export class FavoriteService {
    constructor(@InjectModel(Favorite.name) private favoriteModel: Model<FavoriteDocument>) {}

    async create(user: string): Promise<Favorite> {
    
        const createdFavorite = new this.favoriteModel(user);
        return await createdFavorite.save();
      }

    async findAll(): Promise<Favorite[]> {
        return await this.favoriteModel.find().exec();
    }

    async update(user: string, country: string): Promise<Favorite> {
        const favorite = await this.favoriteModel.findOne({user: user});
        
        favorite.favorites.push(country);
        favorite.save();
        
        return favorite;
    }

    async delete(user: string, country: string): Promise<Favorite> {
        const favorite = await this.favoriteModel.findOne({user: user});
        var newFavorites = []

        await favorite.favorites.forEach((pais) => {
            if (pais != country) {
                newFavorites.push(pais)
            }
        })
        favorite.favorites = newFavorites;
        favorite.save();

        return favorite
        

    }

    

}
