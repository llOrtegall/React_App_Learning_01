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
  const [cart, setCart] = useState<Product[]>([])
  const [showCart, setShowCart] = useState(false)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => { setProducts(json); console.log(json) })
      .catch(err => console.error(err))
  }, [])

  const handleAddToCart = (product: Product) => {
    if (cart.find(item => item.id === product.id)) {
      return
    }
    setCart([...cart, product])
  }

  const handleRemoveFromCart = (product: Product) => {
    setCart(cart.filter(item => item.id !== product.id))
  }

  const handleClickShowCart = () => {
    setShowCart(!showCart)
  }

  return (
    <main className="relative grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 p-2">
      <button onClick={handleClickShowCart} className="absolute left-3 bg-green-600 p-2 rounded-md text-white font-semibold">
        Show Cart
      </button>
      {products.map(product => (
        <article key={product.id}
          className="w-full flex p-2 bg-blue-200 rounded-md h-52">
          <section className="flex flex-col w-2/3 justify-around">
            <h1><span className="font-semibold text-wrap">Title: </span>{product.title}</h1>
            <p><span className="font-semibold">Category: </span>{product.category}</p>
            <p><span className="font-semibold">Rating Count:</span>{product.rating.count}</p>
            <p><span className="font-semibold">Rating Rate: </span>{product.rating.rate}</p>
            <p><span className="font-semibold">Price: $ </span>{product.price}</p>
            <button onClick={() => handleAddToCart(product)}
              className="bg-blue-600 font-semibold w-32 text-white rounded-md p-2 hover:bg-blue-900">
              Add To Card
            </button>
          </section>
          <section className="flex W-1/3">
            <img className="rounded-md" src={product.image} alt={product.title} width={200} />
          </section>
        </article>
      ))}

      {
        showCart && (
          <aside className="fixed top-0 right-0 h-full w-2/3 bg-blue-200 p-2">
            <h1 className="text-2xl font-semibold">Cart</h1>
            <ul>
              {cart.map(product => (
                <li key={product.id} className="flex justify-between">
                  <p>{product.title}</p>
                  <button onClick={() => handleRemoveFromCart(product)}>Remove</button>
                </li>
              ))}
            </ul>
          </aside>
        )
      }
    </main>
  )
}
