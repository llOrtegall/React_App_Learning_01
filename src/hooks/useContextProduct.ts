import { ProductContext } from '../context/ProductProvider'
import { ProductContexInterface } from '../types/Context'
import { useContext } from 'react'


export const useContextProduct = (): ProductContexInterface => {
  const context = useContext(ProductContext)

  if (context === null || context === undefined) {
    throw new Error('useContextProduct must be used within a ProductProvider')
  }

  return context
}
