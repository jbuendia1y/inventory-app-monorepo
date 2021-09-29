import { Switch, Route } from "react-router";
import { lazy, Suspense } from "react";

import PageNotFound from "src/404";
import ProtectedRoute from "./protectedRoute";

const Home = lazy(() => import("../../Home"));
const Auth = lazy(() => import("../../Auth"));

const LoadComponent = () => <div>Loading ...</div>;

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Suspense fallback={<LoadComponent />}>
          <Home />
        </Suspense>
      </Route>
      <ProtectedRoute path={["/login", "/register"]} exact>
        <Suspense fallback={<LoadComponent />}>
          <Auth />
        </Suspense>
      </ProtectedRoute>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  );
}
