import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import validateLogin from '../middlewares/login.middleware';

const loginRoute = Router();

const loginController = new LoginController();

loginRoute.post('/', validateLogin, loginController.login);

export default loginRoute;