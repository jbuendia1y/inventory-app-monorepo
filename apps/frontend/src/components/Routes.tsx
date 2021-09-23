import { Switch, Route } from "react-router";
import Home from "../home/home";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
}
