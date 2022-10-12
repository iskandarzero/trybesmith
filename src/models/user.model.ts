import { Pool, ResultSetHeader } from 'mysql2/promise';
import Login from '../interfaces/login.interface';
import User from '../interfaces/user.interface';

export default class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async findId({ username, password }: Login): Promise<number> {
    const result = await this.connection
      .execute(
        'SELECT id FROM Trybesmith.Users WHERE username = ? AND password = ?;',
        [username, password],
      );

    const [rows] = JSON.parse(JSON.stringify(result));
    return rows[0].id;
  }

  public async create({ username, classe, level, password }: User): Promise<void> {
    await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?);',
      [username, classe, level, password],
    );
  }
}