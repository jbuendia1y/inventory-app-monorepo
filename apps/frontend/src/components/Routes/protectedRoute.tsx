import { Redirect, Route } from "react-router";
import { protectedRoutesProps } from "./interfaces";

export default function ProtectedRoute({
  isAuth,
  path,
  children,
  ...rest
}: protectedRoutesProps) {
  return (
    <Route path={path} {...rest}>
      {isAuth && <Redirect to="/dashboard" />}
      {children}
    </Route>
  );
}
