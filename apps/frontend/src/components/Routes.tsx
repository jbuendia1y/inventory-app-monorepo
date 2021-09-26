import { Switch, Route } from "react-router";
import { lazy, Suspense } from "react";

import PageNotFound from "src/404/PageNotFound";

const Home = lazy(() => import("../home/home"));

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Suspense fallback={<div>Loading ...</div>}>
          <Home />
        </Suspense>
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  );
}
