import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import validateOrder from '../middlewares/order.middleware';
import validateToken from '../middlewares/token.middleware';

const orderRoute = Router();

const orderController = new OrderController();

orderRoute.get('/', orderController.getAll);
orderRoute.post('/', validateToken, validateOrder, orderController.create);

export default orderRoute;