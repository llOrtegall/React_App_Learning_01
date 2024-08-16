import { useFechtProducts } from '../../hooks/useFechtProducts'
import ProductDetail from '../../components/ProductDetail'
import { useParams } from 'react-router-dom'
import Card from '../../components/Card'
import { useState } from 'react'

function Home() {
  const param = useParams()

  console.log(param);
  
  const query = param.Home ? param.Home : ''

  const { items } = useFechtProducts()
  const [search, setSearch] = useState('')
  
  const category = query !== '' ? items.filter(product => product.category.name === query) : items

  const filteredProducts = category?.filter(product => {
    return product.title.toLowerCase().includes(search.toLowerCase())
  })


  return (
    <>
      <header className='flex flex-col'>
        <h1 className='text-2xl font-bold text-center mb-2'>Products List</h1>
        <input type="text" placeholder='Search Product' className='p-2 mb-2 outline-none border border-gray-400 rounded-lg' onChange={ ev => setSearch(ev.target.value)}/>
      </header>

      <section className='grid grid-cols-4 gap-2'>
        {filteredProducts.map(product => <Card key={product.id} item={product} />)}
      </section>
      <section>
        <ProductDetail />
      </section>
    </>
  )
}

export default Home
