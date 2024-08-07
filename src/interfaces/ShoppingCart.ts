import { IProductCart } from "./ProductCart";

export interface IShoppingCart {
  id: string;
  productsCart: IProductCart[];
  totalPay: number;
}
