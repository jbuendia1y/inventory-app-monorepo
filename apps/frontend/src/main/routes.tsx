import { useContext, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connection } from "Infra/connection";

// Contexts
import { AuthContext } from "context/auth.context";

// Pages
import PageNotFound from "modules/pageNotFound/pageNotFound";
import AuthPage from "modules/auth/auth.page";
import DashBoardPage from "modules/dashboard/dashBoard.page";

import ProductsPage from "modules/products/products.page";
import TransactionsPage from "modules/transactions/transactions.page";
import PurchasesPage from "modules/transactions/purchases/purchases.page";
import SalesPage from "modules/transactions/sales/sales.page";

const Routes = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      connection.headers = {
        ...connection.headers,
        authorization: `Bearer ${localStorage.getItem("token")}`,
      };
    }
  });

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() =>
          user ? <Redirect to="/dashboard" /> : <Redirect to="/login" />
        }
      />
      <Route exact path="/login" component={AuthPage} />
      <Route
        exact
        path="/products"
        render={() => (user ? <ProductsPage /> : <Redirect to="/login" />)}
      />
      <Route
        exact
        path="/transactions"
        render={() => (user ? <TransactionsPage /> : <Redirect to="/login" />)}
      />
      <Route
        path="/transactions/purchases"
        render={() => (user ? <PurchasesPage /> : <Redirect to="/login" />)}
      />
      <Route
        path="/transactions/sales"
        render={() => (user ? <SalesPage /> : <Redirect to="/login" />)}
      />
      <Route
        path="/dashboard"
        render={() => (user ? <DashBoardPage /> : <Redirect to="/login" />)}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
