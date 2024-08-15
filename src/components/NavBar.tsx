import { NavLink } from 'react-router-dom'

const activeStyles = 'underline underline-offset-2'

function NavBar () {
  return(
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-4 px-8 text-base font-light'>

      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>Shopi</NavLink>
        </li>
        <li>
          <NavLink to='/' className={({ isActive }) => isActive ? activeStyles : undefined }>All</NavLink>
        </li>
        <li>
          <NavLink to='/clothes' className={({ isActive }) => isActive ? activeStyles : undefined }>Clothes</NavLink>
        </li>
        <li>
          <NavLink to='/electronics' className={({ isActive }) => isActive ? activeStyles : undefined }>Electronics</NavLink>
        </li>
        <li>
          <NavLink to='/furnitures' className={({ isActive }) => isActive ? activeStyles : undefined }>Furnitures</NavLink>
        </li>
        <li>
          <NavLink to='/toys'className={({ isActive }) => isActive ? activeStyles : undefined }>Toys</NavLink>
        </li>
        <li>
          <NavLink to='/others' className={({ isActive }) => isActive ? activeStyles : undefined }>Others</NavLink>
        </li>
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
        <li>
          🛍 0
        </li>
      </ul>

    </nav>
  )
}

export { NavBar }
