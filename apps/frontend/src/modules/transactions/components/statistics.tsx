import { TransactionsModel } from "shared";
import { TransactionsTable } from "./transactionsTable";

export const StatisticsComponent = ({
  transactions,
}: {
  transactions: TransactionsModel;
}) => {
  return (
    <>
      {transactions.purchases.length !== 0 &&
        transactions.sales.length !== 0 && (
          <TransactionsTable transactions={transactions} />
        )}
    </>
  );
};
