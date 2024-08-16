import { Link } from "react-router-dom"
import OrdersCard from "../../components/OrdersCard"
import { useContextProduct } from "../../hooks/useContextProduct"

function MyOrders () {
  const { order } = useContextProduct()

  return (
    <>
      <div>
        <h1>MyOrders</h1>
      </div>
      <div className='flex justify-between items-center w-96 border-b-2 mb-2 border-black/70'>
        <p className='flex w-full justify-around '>
          <span>Date</span>
          <span>Articules</span>
          <span>Price</span>
        </p>
      </div>
      { order && order.map((order, index) => {
        return (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard order={order} />
          </Link>
        )
      }) }
    </>
  )
}

export default MyOrders
