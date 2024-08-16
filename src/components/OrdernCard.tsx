import { ThrashIcon } from './icons/ThrashIcon'
import { Product } from '../types/Product'

function OrderCard({ product, funDelete }: { product: Product, funDelete: (id: number) => void }) {
  const { id, title, images, price } = product

  return (
    <div className='flex justify-between items-center py-2'>

      <section className='w-9/12 flex items-center gap-2'>
        <figure className='w-20 h-20 '>
          <img src={images[0]} alt={title} className='w-full h-full rounded-lg object-cover'/>
        </figure>
        <p className='text-sm font-light text-balance'>{title}</p>
      </section>

      <section className='w-3/12 flex items-center justify-between gap-1'>
        <p className='text-lg font-sm'>$ {price}</p>
        <button className='hover:text-red-600' onClick={() => funDelete(id)}>
          <ThrashIcon />
        </button>
      </section>

    </div>
  )
}

export default OrderCard