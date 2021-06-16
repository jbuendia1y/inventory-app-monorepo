import { UserModel } from "Infra/models/user";
import { createContext, useState } from "react";

export const AuthContext = createContext<{
  user: UserModel | undefined;
  setUser: any;
}>({ user: undefined, setUser: undefined });

export function AuthContextProvider(props: any) {
  const [user, setUser] = useState(undefined as UserModel | undefined);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}
