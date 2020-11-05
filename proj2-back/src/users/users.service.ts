import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserConsultDto } from './dto/consultUser.dto';
import { User, UserDocument } from './user.schema';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserCreateDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async create(userCreateDto: UserCreateDto): Promise<User> {
        const createdUser = new this.userModel(userCreateDto);
        return createdUser.save();
      }
    
    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }
    

}