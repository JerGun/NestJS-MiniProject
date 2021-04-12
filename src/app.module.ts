import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './module/products.module';
import { UserModule } from './module/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/new-nest'), 
    ProductModule, 
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
