import connection from '../models/connection';
import OrderModel from '../models/order.model';
import Order from '../interfaces/order.interface';

export default class OrderService {
  constructor(private orderModel = new OrderModel(connection)) {}

  public async getAll(): Promise<Order[]> {
    const orders = await this.orderModel.getAll();

    return orders;
  }
}