import { useContextProduct } from '../../hooks/useContextProduct'
import OrderCard from '../../components/OrdernCard'
import { Link, useParams } from 'react-router-dom'

function MyOrder() {
  const { order } = useContextProduct()
  const index = useParams<{ id: string }>().id

  const indexOrder = index === 'last' ? order.length - 1 : parseInt(index ?? '0')

  return (
    <>
      <Link to='/my-orders' className='text-green-600'>
        Ir a MyOrders
      </Link>
      <h1>MyOrder</h1>
      <article className='px-2 overflow-y-auto flex-1'>
        {order?.[indexOrder].products.map(product => <OrderCard key={product.id} product={product} />)}
      </article>
    </>
  )
}

export default MyOrder