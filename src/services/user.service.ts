import UserModel from '../models/user.model';
import connection from '../models/connection';
import generateToken from '../auth/generateToken';
import Token from '../interfaces/token.interface';
import User from '../interfaces/user.interface';

export default class UserService {
  constructor(private model = new UserModel(connection)) {}

  public async create(user: User): Promise<Token> {
    await this.model.create(user);
    const token = generateToken(user);
    
    return token;
  }
}