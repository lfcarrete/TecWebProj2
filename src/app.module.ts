import { Module } from '@nestjs/common';
import { type } from 'os';
import { CountryModule } from './country/country.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FavoriteModule } from './favorite/favorite.module';


@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_CONNECTION),
    CountryModule, UsersModule, FavoriteModule],

})
export class AppModule { }
