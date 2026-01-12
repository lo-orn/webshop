// import type { CartItem } from "./CartItem";
import type { Product } from "./product";

export type Cart = {
  items: CartItem[] | [];
};

export type CartItem = {
  product: Product;
  amount: number;
};

export type SubTotal = {
  itemTotal: number;
  freightTotal: number;
};
