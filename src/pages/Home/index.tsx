import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import { Product } from '../../types/Product'

function Home() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <>
      { products.map(product => <Card key={product.id} item={product}/>) }
    </>
  )
} 

export default Home
