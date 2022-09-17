import { Router } from 'express';
import UserController from '../controllers/user.controller';
import {
  validateUsername,
  validateClasse,
  validateLevel, 
  validatePassword } from '../middlewares/user.middleware';

const userRoute = Router();

const userController = new UserController();

userRoute.post(
  '/',
  validateUsername,
  validateClasse,
  validateLevel,
  validatePassword,
  userController.create,
);

export default userRoute;