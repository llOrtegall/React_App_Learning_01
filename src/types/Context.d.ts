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
}
