export interface TransactionsModel {
  purchases: PurchaseModel[];
  sales: SaleModel[];
}

export interface PurchaseModel {
  idPurchase: number;
  seller: string;
  idProduct: number;
  amount: number;
  price: number;
  date: any;
}

export interface SaleModel {
  idSale: number;
  client: string;
  idProduct: number;
  date: any;
  amount: number;
  price: number;
}
