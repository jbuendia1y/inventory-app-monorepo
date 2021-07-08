import { usersRepository } from "repositories/users.repository";
import { rolesRepository } from "repositories/roles.repository";
import { jwt } from "infra/jwt";
import { password } from "infra/password";
import { UserModel } from "shared";

interface AuthCredentials {
  email: string;
  password: string;
}

interface UserLog extends UserModel {
  token: string;
}

class AuthService {
  private JWT = jwt;
  private Password = password;

  public async login(data: AuthCredentials): Promise<UserLog | boolean> {
    const user = await usersRepository.findByEmail(data.email);
    if (!user) return false;

    const validate = await this.Password.validate(data.password, user.password);
    if (!validate) return false;

    const token = await this.JWT.encryptToToken(user);
    const payload: any = { ...user, token };

    delete payload.idRol;

    return payload;
  }

  public async register(data: {
    name: string;
    email: string;
    password: string;
    rol: string;
  }): Promise<boolean> {
    const verify = await usersRepository.findByEmail(data.email);

    if (verify) return false;

    if (rolesRepository.roles.length === 0) {
      await rolesRepository.find();
    }
    const idRol = rolesRepository.roles.indexOf(data.rol);
    if (idRol === -1) return false;

    const password = await this.Password.encrypt(data.password);
    data.password = password;

    const user: any = { ...data, idRol };
    delete user.rol;

    const ok = await usersRepository.insert(user);
    if (!ok) return false;
    return true;
  }
}

export const authService = new AuthService();
