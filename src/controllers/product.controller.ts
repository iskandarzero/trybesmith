import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  public create = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
    const product = await this.productService.create(name, amount);

    res.status(201).json(product);
  };

  public getAll = async (req: Request, res: Response) => {
    const products = await this.productService.getAll();

    res.status(200).json(products);
  };
}