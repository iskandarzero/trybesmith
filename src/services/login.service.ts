import LoginModel from '../models/login.model';
import connection from '../models/connection';
import Token from '../interfaces/token.interface';
import generateToken from '../auth/generateToken';
import Login from '../interfaces/login.interface';

export default class LoginService {
  constructor(private loginModel = new LoginModel(connection)) {}

  public async login(user: Login): Promise<Token | null> {
    const logged = await this.loginModel.login(user);
    
    if (logged) {
      const token = generateToken(user);

      return token;
    }
    
    return null;
  }
}