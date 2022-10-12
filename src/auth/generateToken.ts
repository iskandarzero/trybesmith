import { sign, SignOptions } from 'jsonwebtoken';
import Login from '../interfaces/login.interface';
import Token from '../interfaces/token.interface';

const jwtSecret = 'segredo';

const generateToken = (user: Login): Token => {
  const jwtConfig: SignOptions = {
    algorithm: 'HS256',
  };

  const token = { token: sign({ data: user }, jwtSecret, jwtConfig) };

  return token;
};

export default generateToken;