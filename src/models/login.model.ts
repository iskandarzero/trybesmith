import { Pool } from 'mysql2/promise';
import Login from '../interfaces/login.interface';

export default class LoginModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async login({ username, password }: Login): Promise<boolean> {
    const result = await this.connection
      .execute(
        'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
        [username, password],
      );
    const [rows] = result;
    
    if (Array.isArray(rows) && rows.length === 0) {
      return false;
    }

    return true;
  }
}