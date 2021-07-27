import { useProducts } from "hooks/useProducts";
import { ProductsTable } from "./components/productsTable";
import AddProductComponent from "./components/addProduct";
import { LoadingComponent } from "modules/shared/components/loading";

const ProductsPage = () => {
  const { products, loading } = useProducts();

  return (
    <>
      <AddProductComponent />
      {loading ? (
        <LoadingComponent />
      ) : (
        <ProductsTable products={products ? products : []} />
      )}
    </>
  );
};

export default ProductsPage;
