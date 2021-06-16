import { useTransactions } from "hooks/useTransactions";
import { LoadingComponent } from "modules/shared/components/loading";
import { SalesTable } from "./components/salesTable";

export const SalesPage = () => {
  const { loading, sales } = useTransactions();

  return <>{loading ? <LoadingComponent /> : <SalesTable sales={sales} />}</>;
};
