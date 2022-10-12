import { Request, Response } from 'express';
import OrderService from '../services/order.service';

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAll();

    res.status(200).json(orders);
  };

  public create = async (req: Request, res: Response) => {
    const token = req.headers.authorization;
    const { productsIds } = req.body;

    if (!token) return res.status(401).json({ message: 'Token not found' });

    const order = await this.orderService.create(token, productsIds);

    if (!order) return res.status(401).json({ message: 'Invalid token' });

    res.status(201).json(order);
  };
}