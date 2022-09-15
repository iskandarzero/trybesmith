import { Pool, ResultSetHeader } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrderModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const result = await this.connection
      .execute<ResultSetHeader>(
      `SELECT
          o.id,
          o.userId,
          JSON_ARRAYAGG(p.id) productsIds
        FROM Trybesmith.Orders o JOIN Trybesmith.Products p ON o.id = p.orderId GROUP BY o.id;`,
    );
    const [rows] = result;
    
    return rows as unknown as Order[];
  }
}