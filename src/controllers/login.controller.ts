import { Request, Response } from 'express';
import LoginService from '../services/login.service';
import Login from '../interfaces/login.interface';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  public login = async (req: Request, res: Response) => {
    const user: Login = req.body;
    const token = await this.loginService.login(user);

    if (!token) return res.status(401).json({ message: 'Username or password invalid' });

    res.status(200).json(token);
  };
}