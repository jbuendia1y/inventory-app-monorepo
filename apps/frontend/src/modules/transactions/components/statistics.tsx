import { TransactionsModel } from "shared";

export const StatisticsComponent = ({
  transactions,
}: {
  transactions: TransactionsModel;
}) => {
  return <div>{JSON.stringify(transactions)}</div>;
};
