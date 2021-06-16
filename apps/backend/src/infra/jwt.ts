import { sign, verify } from "jsonwebtoken";
import { envs } from "config";

class JWT {
  private SECRET: string;

  constructor(secret: string) {
    this.SECRET = secret;
  }

  public encryptToToken(data: any): Promise<string> {
    return new Promise((resolve) => {
      resolve(sign(data, this.SECRET));
    });
  }

  public decryptToken(token: any): Promise<any> {
    return new Promise((resolve) => {
      resolve(verify(token, this.SECRET));
    });
  }
}

export const jwt = new JWT(<string>envs.SECRET);
