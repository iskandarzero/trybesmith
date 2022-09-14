import { Request, Response } from 'express';
import UserService from '../services/user.service';
import User from '../interfaces/user.interface';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (req: Request, res: Response) => {
    const user: User = req.body;
    const token = await this.userService.create(user);

    res.status(201).json(token);
  };
}