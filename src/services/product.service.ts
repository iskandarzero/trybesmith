import connection from '../models/connection';
import ProductsModel from '../models/product.model';
import Product from '../interfaces/product.interface';

export default class ProductService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async create(name: string, amount: string): Promise<Product> {
    const product = await this.model.create(name, amount);

    return product;
  }
}