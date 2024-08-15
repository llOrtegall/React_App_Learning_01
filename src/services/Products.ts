import { Product } from "../types/Product"

const getProducst = async () => {
  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/products')
    const data: Product[] = await response.json()

    return data
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching products')
  }
}

export { getProducst }
