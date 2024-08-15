import { getProducst } from '../../services/Products'
import { Product } from '../../types/Product'
import { useEffect, useState } from 'react'

import ProductDetail from '../../components/ProductDetail'
import Card from '../../components/Card'

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
      <section>
        <ProductDetail />
      </section>
    </>
  )
}

export default Home
