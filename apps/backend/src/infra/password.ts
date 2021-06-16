import { compare, genSalt, hash } from "bcrypt";

class Password {
  public async encrypt(password: string): Promise<string> {
    const salt = await genSalt(10);
    return await hash(password, salt);
  }
  public async validate(text: string, original: string): Promise<boolean> {
    return await compare(text, original);
  }
}

export const password = new Password();
