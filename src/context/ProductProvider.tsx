import { ProductContexInterface, PropsProvider } from '../types/Context';
import { createContext, useState } from 'react';
import { Product } from '../types/Product';
import { Order } from '../types/Order';

export const ProductContext = createContext<ProductContexInterface | null>({
  count: 0,
  setCount: () => { },
  funCloseDetail: () => { },
  funOpenDetail: () => { },
  openDetailOpen: false,
  product: null,
  setProduct: () => { },
  cartProducts: [],
  setCartProducts: () => { },
  openCheckSideMenu: false,
  setOpenCheckSideMenu: () => { },
  funOpenSideMenu: () => { },
  funCloseSideMenu: () => { },
  order: [],
  setOrder: () => { }
})

export const ProductProvider = ({ children }: PropsProvider) => {
  const [count, setCount] = useState(0);

  const [openDetailOpen, setOpenDetailOpen] = useState(false);
  const funOpenDetail = () => setOpenDetailOpen(true)
  const funCloseDetail = () => setOpenDetailOpen(false)

  const [openCheckSideMenu, setOpenCheckSideMenu] = useState(false);
  const funOpenSideMenu = () => setOpenCheckSideMenu(true)
  const funCloseSideMenu = () => setOpenCheckSideMenu(false)

  const [product, setProduct] = useState<Product | null>(null);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  const [order, setOrder] = useState<Order[]>([]);

  return (
    <ProductContext.Provider value={{ count, setCount, funOpenDetail, funCloseDetail, openDetailOpen, product, setProduct, cartProducts, setCartProducts, openCheckSideMenu, funOpenSideMenu, funCloseSideMenu, setOpenCheckSideMenu, order, setOrder }}>
      {children}
    </ProductContext.Provider>
  )
};
