import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductController } from '../controller/products.controller';
import { ProductSchema } from '../schema/products.schema';
import { ProductService } from '../service/products.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }])],
    controllers: [ProductController],
    providers: [ProductService],
  })
  export class ProductModule {}