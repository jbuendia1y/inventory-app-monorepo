import { excute } from "infra/database";
import { UserModel } from "infra/models/user";

class UsersRepository {
  public async insert(user: {
    idUser?: number;
    name: string;
    idRol: number;
    email: string;
    password: string;
  }) {
    return await excute({
      query: "INSERT INTO usuarios SET ?",
      values: user,
    });
  }

  public async findByEmail(email: string): Promise<UserModel> {
    return await excute(
      {
        query:
          "SELECT usr.*,roles.name as rol FROM usuarios as usr, roles WHERE usr.email = ?",
        values: [email],
      },
      true
    );
  }

  public async update(data: UserModel, idUser: number) {
    return await excute({
      query: "UPDATE usuarios SET ? WHERE idUser = ? ",
      values: [data, idUser],
    });
  }

  public async delete(user: { idUser: number; email: string }) {
    return await excute({
      query: "DELETE FROM usuarios WHERE idUser = ? AND email = ?",
      values: [user.idUser, user.email],
    });
  }
}

export const usersRepository = new UsersRepository();
