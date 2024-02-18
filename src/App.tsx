import { useEffect, useState } from "react"

interface Product {
  id: number
  title: string
  category: string
  description: string
  rating: { count: number; rate: number }
  price: number
  image: string
}

export function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => { setProducts(json); console.log(json) })
      .catch(err => console.error(err))
  }, [])

  

  return (
    <main className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 p-2">
      {products.map(product => (
        <article key={product.id} 
          className="w-full flex p-2 bg-blue-300 rounded-md">
          <section className="flex flex-col w-2/3 gap-2">
            <h1><span className="font-semibold">Title: </span>{product.title}</h1>
            <p><span className="font-semibold">Category: </span>{product.category}</p>
            <p><span className="font-semibold">Rating Count:</span>{product.rating.count}</p>
            <p><span className="font-semibold">Rating Rate: </span>{product.rating.rate}</p>
            <p><span className="font-semibold">Price: </span>{product.price}</p>
          </section>
          <section className="flex W-1/3 items-">
            <img src={product.image} alt={product.title} width={120} />
          </section>
        </article>
      ))}
    </main>
  )
}
