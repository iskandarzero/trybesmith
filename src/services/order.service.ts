import connection from '../models/connection';
import OrderModel from '../models/order.model';
import Order from '../interfaces/order.interface';
import decodeToken from '../auth/decodeToken';
import ProductModel from '../models/product.model';

export default class OrderService {
  constructor(
    private orderModel = new OrderModel(connection),
    private productModel = new ProductModel(connection),
  ) {}

  public async getAll(): Promise<Order[]> {
    const orders = await this.orderModel.getAll();

    return orders;
  }

  public async create(token: string, ids: number[]): Promise<Order | void> {
    const userId = await decodeToken(token);
    
    if (!userId) return undefined;
    
    const order = await this.orderModel.create(userId);
    await Promise.all(ids.map((id) => this.productModel.update(order, id)));
    // ids.map(async (id) => this.productModel.update(order, id));

    return { userId, productsIds: ids };
  }
}