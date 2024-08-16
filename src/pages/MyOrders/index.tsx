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
