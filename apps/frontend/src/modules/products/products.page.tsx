import { useProducts } from "hooks/useProducts";
import { ProductsTable } from "./components/productsTable";
import { LoadingComponent } from "modules/shared/components/loading";

export const ProductsPage = () => {
  const { products, loading } = useProducts();

  return (
    <>
      {loading ? <LoadingComponent /> : <ProductsTable products={products} />}
    </>
  );
};
