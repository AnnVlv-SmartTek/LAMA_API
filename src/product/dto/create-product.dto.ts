import { Product } from '../../shared/models';


export class CreateProductDto implements Product {
  title: string;
  price: number;
}
