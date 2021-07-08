import { PurchaseModel } from "shared";

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
          <tr key={purchases.indexOf(item)}>
            <td>{item.idPurchase}</td>
            <td>{item.seller}</td>
            <td>{item.idProduct}</td>
            <td>{item.amount}</td>
            <td>{item.cost}</td>
            <td>{item.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
