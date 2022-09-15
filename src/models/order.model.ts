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
      `SELECT ord.id AS id, ord.userId AS userId, JSON_ARRAYAGG(prod.id) AS productsIds
      FROM Trybesmith.Orders as ord
      INNER JOIN Trybesmith.Products as prod
      ON ord.id = prod.orderId
      GROUP BY ord.id
      ORDER BY ord.userId ASC;`,
    );
    const [rows] = result;
    
    return rows as unknown as Order[];
  }
}