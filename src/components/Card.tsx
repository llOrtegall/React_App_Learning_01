import { useContextProduct } from '../hooks/useContextProduct'
import { MouseEvent } from 'react'
import { Product } from '../types/Product'
import { PlusIcon } from './icons/PlusIcon'
import { CheckIcon } from './icons/CheckIcon'

function Card({ item }: { item: Product }) {
  const { count, setCount, funOpenDetail, setProduct, cartProducts, setCartProducts, funOpenSideMenu, funCloseSideMenu } = useContextProduct()

  const showProduct = (item: Product) => {
    funOpenDetail()
    funCloseSideMenu()
    setProduct(item)
  }

  const addProduct = (ev: MouseEvent<HTMLDivElement>, item: Product,) => {
    ev.stopPropagation()
    setCount(count + 1)
    funOpenSideMenu()
    setCartProducts([...cartProducts, item])
  }

  const RenderIcon = (id: number) => {
    const isInCart = cartProducts.filter(product => product.id === id).length > 0

    if (isInCart) {
      return (
        <div className='absolute top-0 right-0 flex justify-center items-center bg-green-300 w-6 h-6 rounded-full m-2'>
          <CheckIcon />
        </div>
      )
    } else {
      return (
        <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 hover:bg-blue-700 hover:text-white' onClick={(ev) => addProduct(ev, item)}>
          <PlusIcon />
        </div>
      )
    }

  }

  return (
    <article className='bg-white cursor-pointer w-56 h-60 rounded-lg' onClick={() => showProduct(item)}>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-1'>{item.title}</span>
        <img className='w-full h-full object-cover rounded-lg' src={item.images[0]} alt={item.description} loading='lazy' />
        {RenderIcon(item.id)}
      </figure>
      <p className='flex justify-between items-center'>
        <span className='text-sm font-light'>{item.category.name}</span>
        <span className='text-lg font-semibold'>$ {item.price}</span>
      </p>
    </article>
  )
}

export default Card
