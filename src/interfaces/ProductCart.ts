import { IProduct } from "./Product";

export interface IProductCart extends IProduct {
  id: number;
  price: number;
  totalPrice: number;
  amount: number;
}
