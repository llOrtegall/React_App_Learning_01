import { BrowserRouter, useRoutes } from 'react-router-dom'
import { ProductProvider } from '../../context/ProductProvider'

import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import LogIn from '../LogIn'
import NotFound from '../NotFound'

import CheckOutSideMenu from '../../components/CheckOutSideMenu'
import { NavBar } from '../../components/NavBar'
import Layout from '../../components/Layout'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/login', element: <LogIn /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <NavBar />
        <Layout>
          <AppRoutes />
        </Layout>
        <CheckOutSideMenu />
      </BrowserRouter>
    </ProductProvider>
  )
}

export default App
