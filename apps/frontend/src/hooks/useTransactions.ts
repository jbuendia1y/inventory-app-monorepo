import { useEffect, useState } from "react";
import { transactionsService } from "modules/transactions/services/transactions.service";
import { PurchaseModel, SaleModel } from "shared";

export const useTransactions = () => {
  const [transactions, setTransactions] = useState({
    purchases: [] as PurchaseModel[],
    sales: [] as SaleModel[],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (
      transactions.sales.length === 0 &&
      transactions.purchases.length === 0
    ) {
      if (
        transactionsService.transactions.purchases.length === 0 &&
        transactionsService.transactions.sales.length === 0
      ) {
        transactionsService.getAllTransactions().then((res) => {
          setTransactions({
            purchases: res.purchases,
            sales: res.sales,
          });
          setLoading(false);
        });
      } else {
        setTransactions(transactionsService.transactions);
      }
    } else {
      setLoading(false);
    }
  }, [transactions.sales.length, transactions.purchases.length]);

  return { ...transactions, loading };
};
