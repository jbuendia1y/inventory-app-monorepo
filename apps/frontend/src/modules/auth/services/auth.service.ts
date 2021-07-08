import { connection } from "Infra/connection";

class AuthService {
  async login(data: any) {
    const res = await connection.post("/login", data);
    if (res.status === 200) {
      const user = await res.json();
      connection.headers = {
        ...connection.headers,
        authorization: `Bearer ${user.token}`,
      };
      return user;
    } else throw new Error("No authorizado");
  }

  async register(data: any) {
    return await connection.post("/register", data);
  }
}

export const authService = new AuthService();
