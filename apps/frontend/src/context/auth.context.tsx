import { UserModel } from "shared";
import { createContext, useState } from "react";

export const AuthContext = createContext<{
  user: UserModel | undefined;
  setUser: any;
}>({ user: undefined, setUser: undefined });

export function AuthContextProvider(props: any) {
  let userBase: any = undefined;
  const token = localStorage.getItem("token");
  if (token) userBase = {};
  const [user, setUser] = useState(userBase as UserModel | undefined);
  console.log("render");
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}
