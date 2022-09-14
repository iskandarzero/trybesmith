import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.interface';

export default class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create({ username, classe, level, password }: User): Promise<void> {
    await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?);',
      [username, classe, level, password],
    );
  }
}