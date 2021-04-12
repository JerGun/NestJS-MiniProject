import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { EditUserDto, UserDto } from "../dto/users.dto";
import { User } from "../schema/users.schema";
import { UserService } from "../service/users.service";

@Controller("users")
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get("all")
    getAllUsers(): Promise<User[]> {
        return this.userService.findAllUsers();
    }

    @Get(":userId")
    async getUser(@Param("userId") userId: String): Promise<User> {
        return await this.userService.findUser(userId);
    }

    @Post()
    async addUser(@Body() userId: UserDto): Promise<Object> {
        const result = await this.userService.addUser(userId);
        return { "id": result.id };
    }

    @Put()
    async editUser(@Body() editUserDto: EditUserDto): Promise<User> {
        return await this.userService.editUser(editUserDto);
    }

    @Delete(":userId")
    async deleteUser(@Param("userId") userId: String) {
        return await this.userService.deleteUser(userId);
    }
}