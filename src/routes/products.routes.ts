import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import { validateName, validateAmount } from '../middlewares/product.middleware';

const productRoute = Router();

const productController = new ProductController();

productRoute.post('/', validateName, validateAmount, productController.create);
productRoute.get('/', productController.getAll);

export default productRoute;