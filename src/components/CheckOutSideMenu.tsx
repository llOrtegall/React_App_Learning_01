import { useContextProduct } from '../hooks/useContextProduct'
import { CloseIcon } from './icons/CloseIcon'

function CheckOutSideMenu (){
  const { openCheckSideMenu, funCloseSideMenu } = useContextProduct()

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
    </aside>
  )
}

export default CheckOutSideMenu