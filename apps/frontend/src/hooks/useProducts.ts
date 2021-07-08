import { useEffect, useState } from "react";
import { ProductModel } from "shared";
import { productsService } from "modules/products/services/products.service";

export const useProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([] as ProductModel[]);

  useEffect(() => {
    setLoading(true);
    if (products.length === 0) {
      if (productsService.products.length === 0) {
        productsService.getAll().then((res) => {
          setProducts(res);
          setLoading(false);
        });
      } else {
        setProducts(productsService.products);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, [products]);

  return { products, loading };
};
