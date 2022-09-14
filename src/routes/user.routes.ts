import { Router } from 'express';
import UserController from '../controllers/user.controller';

const userRoute = Router();

const userController = new UserController();

userRoute.post('/', userController.create);

export default userRoute;