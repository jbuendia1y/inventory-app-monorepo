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

export interface PurchaseModel {
  idPurchase: number;
  seller: string;
  idProduct: number;
  amount: number;
  cost: number;
  date: number;
}

export interface SaleModel {
  idSale: number;
  client: string;
  idProduct: number;
  amount: number;
  price: number;
  date: number;
}
