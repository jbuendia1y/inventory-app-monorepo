import type { PurchaseModel } from "shared";
import Table from "modules/shared/components/table";

const PurchasesTable = ({ purchases }: { purchases: PurchaseModel[] }) => {
  const fieldsTable = ["id", "Provider", "IdProduct", "Amount", "Cost", "Date"];
  const fieldsData = [
    "idPurchase",
    "provider",
    "idProduct",
    "amount",
    "cost",
    "date",
  ];

  return (
    <Table data={purchases} fieldsData={fieldsData} fieldsTable={fieldsTable} />
  );
};

export default PurchasesTable;
