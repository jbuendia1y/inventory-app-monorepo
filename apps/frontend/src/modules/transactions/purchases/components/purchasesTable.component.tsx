import { PurchaseModel } from "Infra/models/transactions";

export const PurchasesTable = ({
  purchases,
}: {
  purchases: PurchaseModel[];
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Seller</th>
          <th>IdProduct</th>
          <th>Amount</th>
          <th>Price</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {purchases.map((item) => (
          <>
            <tr>{item.idPurchase}</tr>
            <tr>{item.seller}</tr>
            <tr>{item.idProduct}</tr>
            <tr>{item.amount}</tr>
            <tr>{item.price}</tr>
            <tr>{item.date}</tr>
          </>
        ))}
      </tbody>
    </table>
  );
};
