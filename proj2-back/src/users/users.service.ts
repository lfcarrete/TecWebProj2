import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserConsultDto } from './dto/consultUser.dto';
import { User, UserDocument } from './user.schema';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserCreateDto } from './dto/createUser.dto';
import { IsNull } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async create(userCreateDto: UserCreateDto): Promise<User> {
        const createdUser = new this.userModel(userCreateDto);
        return createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }
    async auth(userConsultDto: UserConsultDto): Promise<Boolean>{
        const user = await this.userModel.findOne({username:userConsultDto.username, password: userConsultDto.password})
        if(user){
            return true
        } else {
            return false
        }
    }

    async delete(user: string) {
        return await this.userModel.deleteOne({username:user})
    }


}
