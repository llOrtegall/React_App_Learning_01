import { Order } from '../types/Order'
import { ArrowIcon } from './icons/ArrowIcon'

function OrdersCard({ order }: { order: Order }) {

  return (
    <div className='flex justify-between items-center py-2 border border-black w-96 p-8 rounded-lg mb-2 hover:bg-yellow-200'>
      <p className='flex w-full justify-around '>
        <span>{order.date}</span>
        <span>{order.totalProducts}</span>
        <span>${order.totalPrice}</span>
        <ArrowIcon />
      </p>

    </div>
  )
}

export default OrdersCard