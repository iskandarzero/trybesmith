import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const productRoute = Router();

const productController = new ProductController();

productRoute.post('/', productController.create);

export default productRoute;