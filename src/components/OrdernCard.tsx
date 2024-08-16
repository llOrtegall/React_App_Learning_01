import { Product } from '../types/Product'
import { CloseIcon } from './icons/CloseIcon'

function OrderCard({ product }: { product: Product }) {
  const { title, images, price } = product

  return (
    <div className='flex justify-between items-center py-2'>

      <section className='flex items-center gap-2'>
        <figure className='w-20 h-20 '>
          <img src={images[0]} alt={title} className='w-full h-full rounded-lg object-cover'/>
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </section>

      <section className='flex items-center gap-2'>
        <p className='text-lg font-medium'>{price}</p>
        <button>
          <CloseIcon />
        </button>
      </section>

    </div>
  )
}

export default OrderCard