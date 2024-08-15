import { useContextProduct } from '../hooks/useContextProduct'
import { CloseIcon } from './icons/CloseIcon'

function ProductDetail (){
  const { openDetailOpen, funCloseDetail, product, setProduct } = useContextProduct()

  const handleCloseDetail = () => {
    funCloseDetail()
    setProduct(null)
  }

  return(
    <aside className={`${openDetailOpen ? 'flex': 'hidden'} pro-detail flex-col fixed right-0 z-50 mt-16 mr-0.5 border border-black rounded-lg bg-white p-2`}>
      <article className='flex justify-between items-center  px-1'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <h2 className='font-medium text-xl hover:text-red-500 cursor-pointer' onClick={() => handleCloseDetail()}>
          <CloseIcon />
        </h2>
      </article>

      <figure className='px-6 py-2'>
        <img src={product?.images[0]} alt={product?.title} className='w-full h-full rounded-lg' />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-semibold text-2xl pb-2'>$ {product?.price}</span>
        <span className='font-medium text-sm pb-2'>{product?.title}</span>
        <span className='font-normal text-sm'>{product?.description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail