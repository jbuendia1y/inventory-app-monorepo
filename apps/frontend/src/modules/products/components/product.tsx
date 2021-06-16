import { ProductModel } from "Infra/models/product";

export const Product = (props: { product: ProductModel }) => {
  const { product } = props;
  return (
    <tr className="text-center truncate">
      <td className="border border-gray-700">{product.idProduct}</td>
      <td className="border border-gray-700">{product.name}</td>
      <td className="border border-gray-700">{product.format}</td>
      <td className="border border-gray-700">{product.category}</td>
      <td className="border border-gray-700">{product.subcategory}</td>
      <td className="border border-gray-700">{product.mark}</td>
      <td className="border border-gray-700">{product.price}</td>
      <td className="border border-gray-700">{product.stock}</td>
    </tr>
  );
};
