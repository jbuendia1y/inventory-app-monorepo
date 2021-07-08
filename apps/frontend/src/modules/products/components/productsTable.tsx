import { Product } from "./product";
import { ProductModel } from "shared";
import { useState } from "react";

export const ProductsTable = (props: { products: ProductModel[] }) => {
  const { products } = props;
  const [filter, setFilter] = useState("");

  const base = products.map((product) => (
    <Product product={product} key={product.idProduct} />
  ));

  const handleFilter = () => {
    const _filterProducts = () => {
      const payload = [];
      for (const product of products) {
        if (product.name.includes(filter.toLocaleUpperCase())) {
          payload.push(product);
        }
      }
      if (payload.length === 0)
        return (
          <tr>
            <td className="whitespace-nowrap">No hay coincidencias</td>
          </tr>
        );
      else {
        return payload.map((item) => (
          <Product product={item} key={item.idProduct} />
        ));
      }
    };
    return filter.length === 0 ? base : _filterProducts();
  };

  return (
    <>
      <form className="inline-block" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="name_product"
          id="name_product"
          placeholder="Filter"
          aria-label="name_product"
          className="rounded-sm px-2 py-1"
          onChange={(e) => setFilter(e.target.value)}
        />
      </form>
      <table className="table-fixed mx-auto">
        <thead>
          <tr>
            <th className="border border-indigo-700 bg-indigo-700 w-1">ID</th>
            <th className="border border-indigo-700 bg-indigo-700 w-1/2">
              Name
            </th>
            <th className="border border-indigo-700 bg-indigo-700 w-1/6">
              Format
            </th>
            <th className="border border-indigo-700 bg-indigo-700 w-1/2">
              Mark
            </th>
            <th className="border border-indigo-700 bg-indigo-700 w-1/4">
              Price
            </th>
            <th className="border border-indigo-700 bg-indigo-700 w-1/4">
              Stock
            </th>
          </tr>
        </thead>
        <tbody>{handleFilter()}</tbody>
      </table>
    </>
  );
};
