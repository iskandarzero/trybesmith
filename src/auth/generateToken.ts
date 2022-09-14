import { sign, SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import Token from '../interfaces/token.interface';

dotenv.config();

const jwtSecret = process.env.JWT_SECRET || 'segredo';

const generateToken = async (user: string): Promise<Token> => {
  const jwtConfig: SignOptions = {
    algorithm: 'HS256',
  };

  const token = { token: sign({ data: user }, jwtSecret, jwtConfig) };

  return token;
};

export default generateToken;