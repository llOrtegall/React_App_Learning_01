import { NavLink } from 'react-router-dom'
import { useContextProduct } from '../hooks/useContextProduct'
import { ShopBagIcon } from './icons/ShopBagIcon'

const activeStyles = 'underline underline-offset-2'

const RoutesPrimarys = [
  { name: 'All', path: '/' },
  { name: 'Clothes', path: '/Clothes' },
  { name: 'Electronics', path: '/Electronics' },
  { name: 'Shoes', path: '/Shoes' },
  { name: 'Furniture', path: '/Love is light' },
  { name: 'My Account', path: '/my-account' }
]

function NavBar () {
  const { count, funOpenSideMenu } = useContextProduct()

  return(
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-4 px-8 text-base font-light'>

      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>Shopi</NavLink>
        </li>
        {RoutesPrimarys.map((route, index) => (
          <li key={index}>
            <NavLink to={route.path} className={({ isActive }) => isActive ? activeStyles : undefined }>{route.name}</NavLink>
          </li>
        ))}
      </ul>

      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
          example@example.com
        </li>
        <li>
          <NavLink to='/my-orders' className={({ isActive }) => isActive ? activeStyles : undefined }>My Orders</NavLink>
        </li>
        <li>
          <NavLink to='/my-account' className={({ isActive }) => isActive ? activeStyles : undefined }>My Account</NavLink>
        </li>
        <li className='flex items-center gap-1 cursor-pointer hover:text-green-600' onClick={ () => funOpenSideMenu() }>
         <ShopBagIcon />
          <span className='font-semibold pt-0.5'>{count}</span>
        </li>
      </ul>

    </nav>
  )
}

export { NavBar }
