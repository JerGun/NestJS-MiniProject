import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserController } from '../controller/users.controller';
import { UserSchema } from '../schema/users.schema';
import { UserService } from '../service/users.service';


@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
    controllers: [UserController],
    providers: [UserService],
  })
  export class UserModule {}