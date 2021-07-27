import { connection } from "Infra/connection";
import { ProductModel } from "shared";

type insertProduct = Omit<ProductModel, "idProduct">;

class ProductsService {
  public products: ProductModel[] = [];

  public async getAll(): Promise<ProductModel[]> {
    if (this.products.length !== 0) return this.products;
    const products = await connection
      .get("/products")
      .catch((err) => err.message);
    if (typeof products === "string") throw new Error(products);
    this.products = products;
    return this.products;
  }

  public async insertProduct(data: insertProduct) {
    const res = await connection.post("/products", data);
    if (res.status !== 200) throw new Error(res.statusText);
    return await res.json();
  }
}

export const productsService = new ProductsService();
