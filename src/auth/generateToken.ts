import { sign, SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import Token from '../interfaces/token.interface';

dotenv.config();

const jwtSecret = 'segredo';

const generateToken = (username: string): Token => {
  const jwtConfig: SignOptions = {
    algorithm: 'HS256',
  };

  const token = { token: sign({ data: username }, jwtSecret, jwtConfig) };

  return token;
};

export default generateToken;