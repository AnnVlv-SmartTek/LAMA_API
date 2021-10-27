import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseGuards, UseInterceptors } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';
import { CounterInterceptor } from '../shared/interceptors/counter.interceptor';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from '../shared/models';
import { AuthGuard } from '../shared/guards/auth.guard';


@Controller('product')
@UseGuards(new AuthGuard())
@UseInterceptors(CounterInterceptor)
export class ProductController {
  constructor(
    private readonly productService: ProductService,
  ) { }

  @Get()
  getAll(): Product[] {
    return this.productService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id): Product {
    return this.productService.getById(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() product: CreateProductDto): Product {
    return this.productService.create(product);
  }

  @Put(':id')
  update(@Param('id') id, @Body() product: UpdateProductDto): Product {
    return this.productService.update(id, product);
  }

  @Delete(':id')
  delete(@Param('id') id): void {
    this.productService.delete(id);
  }
}
