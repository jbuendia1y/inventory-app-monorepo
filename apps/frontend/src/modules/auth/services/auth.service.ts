import { connection } from "Infra/connection";

class AuthService {
  async login(data: any) {
    const res = await connection.post("/login", data);
    if (res.status === 200) {
      const user = await res.json();
      connection.headers = {
        ...connection.headers,
        token: `Bearer ${user.token}`,
      };
      return user;
    } else return undefined;
  }

  async register(data: any) {
    return await connection.post("/register", data);
  }
}

export const authService = new AuthService();
