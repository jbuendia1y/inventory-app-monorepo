import { Route, Switch } from "react-router";
import "./auth.scss";
import AuthLogin from "./components/authLogin";
import AuthRegister from "./components/authRegister";

export default function Auth() {
  return (
    <>
      <main className="auth">
        <Switch>
          <Route path="/register" exact>
            <AuthRegister />
          </Route>
          <Route path="/login" exact>
            <AuthLogin />
          </Route>
        </Switch>
      </main>
    </>
  );
}
