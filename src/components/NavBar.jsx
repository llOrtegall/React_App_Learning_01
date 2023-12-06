import { Link } from 'react-router-dom'

export function NavBar() {

  return (
    <>
      <nav className='flex bg-slate-900 h-auto py-2 px-4 justify-around items-center'>
        <ul>
          <figure>
            <img src="logo.png" alt="logo" width={120} />
          </figure>
        </ul>
        <ul className='flex gap-4'>
          <li className='text-xl font-semibold hover:text-yellow-600'>
            <Link to='/dashboard'>Home</Link>
          </li>
          <li className='text-xl font-semibold hover:text-yellow-600'>
            <Link to='/activos'>Activos</Link>
          </li>
        </ul>
      </nav>
    </>

  )
}