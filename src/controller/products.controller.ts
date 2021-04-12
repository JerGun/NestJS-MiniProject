import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Product } from 'src/schema/products.schema';
import { EditProductDto, ProductDto } from '../dto/products.dto';
import { ProductService } from '../service/products.service';

@Controller("products")
export class ProductController {
    constructor(private readonly productsService: ProductService) { }

    @Get("all")
    getAllProducts(): Promise<Product[]> {
        return this.productsService.findAllProducts();
    }

    @Get(":productId")
    async getProduct(@Param("productId") productId: String): Promise<Product> {
        return await this.productsService.findProduct(productId);
    }

    @Post()
    async addProduct(@Body() productDto: ProductDto): Promise<Object> {
        const result = await this.productsService.addProduct(productDto);
        return { "id": result.id };
    }

    @Put()
    async editProduct(@Body() editProductDto: EditProductDto): Promise<Product> {
        return await this.productsService.editProduct(editProductDto);
    }

    @Delete(":productId")
    async deleteProduct(@Param("productId") productId: String) {
        return await this.productsService.deleteProduct(productId);
    }
}
