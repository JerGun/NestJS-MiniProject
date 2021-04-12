import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { User } from "../schema/users.schema";
import { EditUserDto, UserDto } from "../dto/users.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async findAllUsers(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async findUser(userId: String): Promise<User> {
        return await this.userModel.findById(userId).exec();
    }

    async addUser(userDto: UserDto): Promise<User> {
        return await this.userModel.create(userDto);
    }

    async editUser(editUserDto: EditUserDto): Promise<User> {
        const user = await this.userModel.findById(editUserDto.id).exec();
        user.firstName = editUserDto.firstName;
        user.lastName = editUserDto.lastName;
        user.birthDate = editUserDto.birthDate;
        user.modifiedAt =  Date.now();
        user.save();

        return user;
    }

    async deleteUser(userId: String) {
        const result = await this.userModel.deleteOne({ _id: userId }).exec();
        if (result.n === 0) {
            throw new NotFoundException('Could not find user.');
        }else {
            return { "message": "Deleted" };
        }
    }
}