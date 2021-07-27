import { TransactionsModel } from "shared";
import TableComponent from "modules/shared/components/table";

export const TransactionsTable = ({
  transactions,
}: {
  transactions: TransactionsModel;
}) => {
  const p_fieldsTable = ["id", "idProduct", "Amount", "Cost", "Date"];
  const p_fieldsData = ["idPurchase", "idProduct", "amount", "cost", "date"];

  const s_fieldsTable = ["id", "idProduct", "Amount", "Price", "Date"];
  const s_fieldsData = ["idSale", "idProduct", "amount", "price", "date"];

  const formatData = (data: any) => {
    return (data as any[]).map((item) => {
      return item;
    });
  };

  const purchases = formatData(transactions.purchases);
  const sales = formatData(transactions.sales);

  return (
    <>
      <TableComponent
        fieldsData={p_fieldsData}
        fieldsTable={p_fieldsTable}
        data={purchases}
      />
      <TableComponent
        fieldsData={s_fieldsData}
        fieldsTable={s_fieldsTable}
        data={sales}
      />
    </>
  );
};
