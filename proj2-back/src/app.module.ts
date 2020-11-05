import { Module } from '@nestjs/common';
import { type } from 'os';
import { CountryModule } from './country/country.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/users'),
    CountryModule, UsersModule],

})
export class AppModule { }
