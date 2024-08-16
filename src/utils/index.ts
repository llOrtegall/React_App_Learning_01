import { Product } from '../types/Product';

/**
 * 
 * @param {Array} products cart products array 
 * @returns {number} total price of all products
 */
export const totalPrice = (products: Product[]): number => {
  return products.reduce((acc, product) => acc + product.price, 0)
}