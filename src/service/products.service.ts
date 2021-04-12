import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product } from '../schema/products.schema';
import { EditProductDto, ProductDto } from '../dto/products.dto';

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private productModel: Model<Product>) { }

    async findAllProducts(): Promise<Product[]> {
        return await this.productModel.find().exec();
    }

    async findProduct(productId: String): Promise<Product> {
        return await this.productModel.findById(productId).exec();
    }

    async addProduct(productDto: ProductDto): Promise<Product> {
        return await this.productModel.create(productDto);
    }

    async editProduct(editProductDto: EditProductDto): Promise<Product> {
        const product = await this.productModel.findById(editProductDto.id).exec();
        product.title = editProductDto.title;
        product.description = editProductDto.description;
        product.price = editProductDto.price;
        product.modifiedAt =  Date.now();
        product.save();

        return product;
    }

    async deleteProduct(productId: String) {
        const result = await this.productModel.deleteOne({ _id: productId }).exec();
        if (result.n === 0) {
            throw new NotFoundException('Could not find product.');
        }else {
            return { "message": "Deleted" };
        }
    }
}
