import { useTransactions } from "hooks/useTransactions";
import { LoadingComponent } from "modules/shared/components/loading";

import { StatisticsComponent } from "./components/statistics";

const TransactionsPage = () => {
  const { loading, purchases, sales } = useTransactions();
  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <StatisticsComponent transactions={{ purchases, sales }} />
      )}
    </>
  );
};

export default TransactionsPage;
