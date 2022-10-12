import { verify } from 'jsonwebtoken';
import connection from '../models/connection';
import UserModel from '../models/user.model';

const jwtSecret = 'segredo';
const userModel = new UserModel(connection);

const decodeToken = async (token: string): Promise<number | void> => {
  try {
    const decoded = verify(token, jwtSecret);
    if (decoded && typeof decoded !== 'string') {
      const user = decoded.data;
      const userId = await userModel.findId(user);

      return userId;
    }
    
    throw new Error();
  } catch (err) {
    console.log(err);    
  }
};

export default decodeToken;