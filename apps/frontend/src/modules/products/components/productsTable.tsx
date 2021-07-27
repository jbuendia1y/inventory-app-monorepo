import { useState } from "react";
import { ProductModel } from "shared";

import FilterIcon from "modules/shared/components/filter-icon";
import TableComponent from "modules/shared/components/table";

export const ProductsTable = (props: { products: ProductModel[] }) => {
  const { products } = props;
  const [search, setSearch] = useState("");

  const base = products;

  const _filterProducts = () => {
    const payload = products.filter((item) => {
      const currentSearch = search.toLocaleLowerCase().trim();
      return (
        item.name.toLocaleLowerCase().includes(currentSearch) ||
        item.mark.toLocaleLowerCase().includes(currentSearch)
      );
    });
    if (payload.length === 0) return [];
    else return payload;
  };

  const handleFilter = () => {
    return search.length === 0 ? base : _filterProducts();
  };

  const fieldsTable = ["ID", "Name", "Format", "Mark", "Price", "Stock"];
  const fieldsData = ["idProduct", "name", "format", "mark", "price", "stock"];

  return (
    <>
      <div className="flex">
        <FilterIcon />
        <input
          type="search"
          name="name_product"
          id="name_product"
          placeholder="Filter"
          aria-label="name_product"
          className="rounded-sm px-2 py-1"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <TableComponent
        fieldsTable={fieldsTable}
        fieldsData={fieldsData}
        data={handleFilter()}
      />
    </>
  );
};
