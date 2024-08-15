import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import { Product } from '../../types/Product'
import { getProducst } from '../../services/Products'

function Home() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    getProducst()
      .then(data => setProducts(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <section className='grid grid-cols-4 gap-2'>
        {products.map(product => <Card key={product.id} item={product} />)}
      </section>
    </>
  )
}

export default Home
