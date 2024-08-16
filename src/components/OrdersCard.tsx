import { Order } from '../types/Order'

function OrdersCard({ order }: { order: Order }) {

  return (
    <div className='flex justify-between items-center py-2 border border-black'>
      <p>
        {order.date}
        <span>{order.totalProducts}</span>
        <span>{order.totalPrice}</span>
      </p>

    </div>
  )
}

export default OrdersCard