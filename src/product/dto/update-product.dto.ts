import { Product } from '../../shared/models';


export class UpdateProductDto implements Product {
  title: string;
  price: number;
}
