import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EditUserDto, UserDto } from "src/dto/users.dto";

import { User } from "src/schema/users.schema";

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async findAllProducts(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async findProduct(productId: String): Promise<User> {
        return await this.userModel.findById(productId).exec();
    }

    async addProduct(userDto: UserDto): Promise<User> {
        return await this.userModel.create(userDto);
    }

    async editProduct(editUserDto: EditUserDto): Promise<User> {
        const user = await this.userModel.findById(editUserDto.id).exec();
        user.firstName = editUserDto.firstName;
        user.lastName = editUserDto.lastName;
        user.birthDate = editUserDto.birthDate;
        user.modifiedAt =  Date.now();
        user.save();

        return user;
    }

    async deleteProduct(userId: String) {
        const result = await this.userModel.deleteOne({ _id: userId }).exec();
        if (result.n === 0) {
            throw new NotFoundException('Could not find product.');
        }else {
            return { "message": "Deleted" };
        }
    }
}