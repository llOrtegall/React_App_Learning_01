import { ProductContexInterface, PropsProvider } from '../types/Context';
import { createContext, useState } from 'react';

export const ProductContext = createContext<ProductContexInterface | null>({ count: 0, setCount: () => {} });

export const ProductProvider = ({ children }: PropsProvider) => {
  const [count, setCount] = useState(0);

  return(
    <ProductContext.Provider value={{ count, setCount }}>
      {children}
    </ProductContext.Provider>
  )
};
