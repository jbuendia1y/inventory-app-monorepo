import { TransactionsModel } from "Infra/models/transactions";

export const StatisticsComponent = ({
  transactions,
}: {
  transactions: TransactionsModel;
}) => {
  return <div>{JSON.stringify(transactions)}</div>;
};
