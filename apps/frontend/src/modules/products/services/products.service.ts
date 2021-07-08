import { connection } from "Infra/connection";
import { ProductModel } from "shared";

class ProductsService {
  public products: ProductModel[] = [];

  public async getAll(): Promise<ProductModel[]> {
    if (this.products.length !== 0) return this.products;
    const products = await connection.get("/products");
    this.products = products;
    return this.products;
  }
}

export const productsService = new ProductsService();
