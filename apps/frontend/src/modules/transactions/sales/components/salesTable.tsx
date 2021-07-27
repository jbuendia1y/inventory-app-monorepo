import { formatDate } from "modules/shared/helpers";
import Table from "modules/shared/components/table";
import { SaleModel } from "shared";

export const SalesTable = ({ sales }: { sales: SaleModel[] }) => {
  const fieldsTable = ["id", "client", "idProduct", "amount", "price", "date"];
  const fieldsData = [
    "idSale",
    "client",
    "idProduct",
    "amount",
    "price",
    "date",
  ];
  return (
    <Table data={sales} fieldsData={fieldsData} fieldsTable={fieldsTable} />
  );
};
