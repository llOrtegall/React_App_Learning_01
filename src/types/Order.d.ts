import { Product } from "./Product";

export interface Order {
  date: string;
  products: Product[];
  totalProducts: number;
  totalPrice: number;
}