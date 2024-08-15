import { CloseIcon } from "./icons/CloseIcon"

function ProductDetail (){
  return(
    <aside className='pro-detail flex flex-col fixed right-0 z-50 mt-16 mr-0.5 border border-black rounded-lg bg-white p-2'>
      <article className="flex justify-between items-center  px-1">
        <h2 className="font-medium text-xl">Detail</h2>
        <h2 className="font-medium text-xl hover:text-red-500 cursor-pointer">
          <CloseIcon />
        </h2>
      </article>
    </aside>
  )
}

export default ProductDetail