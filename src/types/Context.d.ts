import { Order } from "./Order";
import { Product } from "./Product";

export interface PropsProvider {
  children: React.ReactNode;
}

export interface ProductContexInterface {
  product: Product | null;
  setProduct: React.Dispatch<React.SetStateAction<Product | null>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>
  openDetailOpen: boolean;
  funOpenDetail: () => void;
  funCloseDetail: () => void;
  cartProducts: Product[];
  setCartProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  openCheckSideMenu: boolean;
  setOpenCheckSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
  funOpenSideMenu: () => void;
  funCloseSideMenu: () => void;
  order: Order[];
  setOrder: React.Dispatch<React.SetStateAction<Order[]>>;
}
