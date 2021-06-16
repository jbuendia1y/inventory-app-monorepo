import { excute } from "infra/database";
import { ProductModel } from "infra/models/inventory";

class ProductsRepository {
  public async insert(product: ProductModel) {
    return await excute({
      query: "INSERT INTO products SET ?",
      values: product,
    });
  }

  public async getAll(): Promise<ProductModel[]> {
    return await excute({
      query: "SELECT * FROM products ORDER BY idProduct ASC;",
    });
  }

  public async update(data: ProductModel, idProduct: number) {
    return await excute({
      query: "UPDATE products SET ? WHERE idProduct = ? ",
      values: [data, idProduct],
    });
  }

  public async delete(idProduct: number) {
    return await excute({
      query: "DELETE FROM products WHERE idProduct = ?",
      values: [idProduct],
    });
  }
}

export const productsRepository = new ProductsRepository();
