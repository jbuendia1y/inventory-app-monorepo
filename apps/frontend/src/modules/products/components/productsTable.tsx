import { Product } from "./product";
import { ProductModel } from "Infra/models/product";

export const ProductsTable = (props: { products: ProductModel[] }) => {
  const { products } = props;

  return (
    <table className="table-fixed">
      <thead>
        <tr>
          <th className="border border-indigo-700 bg-indigo-700 w-1">ID</th>
          <th className="border border-indigo-700 bg-indigo-700 w-1/2">Name</th>
          <th className="border border-indigo-700 bg-indigo-700 w-1/6">
            Format
          </th>
          <th className="border border-indigo-700 bg-indigo-700 w-1/6">
            Category
          </th>
          <th className="border border-indigo-700 bg-indigo-700 w-1/6">
            SubCategory
          </th>
          <th className="border border-indigo-700 bg-indigo-700 w-1/2">Mark</th>
          <th className="border border-indigo-700 bg-indigo-700 w-1/4">
            Price
          </th>
          <th className="border border-indigo-700 bg-indigo-700 w-1/4">
            Stock
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <Product product={product} key={product.idProduct} />
        ))}
      </tbody>
    </table>
  );
};
