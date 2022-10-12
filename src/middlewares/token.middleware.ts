import { Request, Response, NextFunction } from 'express';
import decodeToken from '../auth/decodeToken';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });
  
  const userId = await decodeToken(token);

  if (!userId) return res.status(401).json({ message: 'Invalid token' });

  next();
};

export default validateToken;