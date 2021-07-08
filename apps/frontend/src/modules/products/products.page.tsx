import { useProducts } from "hooks/useProducts";
import { ProductsTable } from "./components/productsTable";
import { ActionsProduct } from "./components/actionsProduct";
import { LoadingComponent } from "modules/shared/components/loading";

export const ProductsPage = () => {
  const { products, loading } = useProducts();

  return (
    <>
      <ActionsProduct />
      {loading ? <LoadingComponent /> : <ProductsTable products={products} />}
    </>
  );
};
