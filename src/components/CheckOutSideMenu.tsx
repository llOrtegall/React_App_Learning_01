import { useContextProduct } from '../hooks/useContextProduct'
import { CloseIcon } from './icons/CloseIcon'
import OrderCard from './OrdernCard'

function CheckOutSideMenu (){
  const { openCheckSideMenu, funCloseSideMenu, cartProducts } = useContextProduct()

  const handleCloseDetail = () => {
    funCloseSideMenu()
  }

  return(
    <aside className={`${openCheckSideMenu ? 'flex': 'hidden'} check-side-menu flex-col fixed right-0 z-50 mt-16 mr-0.5 border border-black rounded-lg bg-white p-2`}>
      <article className='flex justify-between items-center  px-1'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <h2 className='font-medium text-xl hover:text-red-500 cursor-pointer' onClick={() => handleCloseDetail()}>
          <CloseIcon />
        </h2>
      </article>
      
      <article className='px-4 overflow-y-auto'>
        { cartProducts.map(product => <OrderCard key={product.id} product={product} />) }
      </article>


    </aside>
  )
}

export default CheckOutSideMenu