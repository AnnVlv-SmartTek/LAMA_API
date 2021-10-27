import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from '../shared/models';
import { UpdateProductDto } from './dto/update-product.dto';
import { INITIAL_PRODUCTS } from '../shared/mock-data';


@Injectable()
export class ProductService {
  private products: Product[] = INITIAL_PRODUCTS;

  getAll(): Product[] {
    return this.products;
  }

  getById(id: string): Product {
    return this.products[id];
  }

  create(product: CreateProductDto): Product {
    const newProduct = {
      ...product,
      id: Date.now().toString(),
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: string, product: UpdateProductDto): Product {
    const index = this.products.findIndex(product => product.id === id);
    const updatedProduct = {
      ...product,
      id: this.products[index].id,
    }
    this.products[index] = updatedProduct;
    return updatedProduct;
  }

  delete(id: string): void {
    this.products = this.products.filter(product => product.id === id);
  }
}
