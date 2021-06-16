import { useTransactions } from "hooks/useTransactions";
import { LoadingComponent } from "modules/shared/components/loading";
import { PurchasesTable } from "./components/purchasesTable.component";

export const PurchasesPage = () => {
  const { loading, purchases } = useTransactions();
  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <PurchasesTable purchases={purchases} />
      )}
    </>
  );
};
