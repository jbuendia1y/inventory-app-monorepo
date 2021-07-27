/* ---- PRODUCTS ---- */
export interface ProductModel {
  idProduct: number;
  name: string;
  format: string;
  category: string;
  subcategory: string;
  mark: string;
  price: number;
  stock: number;
}

export interface LotModel {
  idLot: number;
  id: number;
  type: string;
}

/* ---- TRANSACTIONS ---- */

export interface TransactionsModel {
  purchases: PurchaseModel[];
  sales: SaleModel[];
}

export interface PurchaseModel {
  idPurchase: number;
  provider: string;
  idProduct: number;
  amount: number;
  cost: number;
  date: string;
}

export interface SaleModel {
  idSale: number;
  client: string;
  idProduct: number;
  amount: number;
  price: number;
  date: string;
}

/* ---- REPORTS ---- */

export interface ReportModel {
  purchases: number;
  sales: number;
  year: number;
}
