import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { AuthPage } from "modules/auth/auth.page";
import { PageNotFound } from "modules/pageNotFound/pageNotFound";
import { ProductsPage } from "modules/products/products.page";
import { TransactionsPage } from "modules/transactions/transactions.page";

import { AuthContext } from "context/auth.context";
import { PurchasesPage } from "modules/transactions/purchases/purchases.page";
import { SalesPage } from "modules/transactions/sales/sales.page";

export const Routes = () => {
  const { user } = useContext(AuthContext);
  return (
    <Switch>
      <Route exact path="/" component={AuthPage} />
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
      <Route component={PageNotFound} />
    </Switch>
  );
};
