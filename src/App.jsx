import { useEffect, useState } from 'react'

const CAT_ENDPOINT = 'https://catfact.ninja/fact'

function App () {
  const [fact, setFact] = useState('lorem impsun car fact whatever')
  const [img, setImg] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    const firstWords = fact.split(' ', 3).join(' ')

    if (!fact) return

    fetch(`https://cataas.com/cat/says/${firstWords}?fontSize=50&fontColor=red`)
      .then(response => {
        const { url } = response
        setImg(url)
      })
  }, [fact])

  return (
    <section className='flex flex-col h-screen w-full bg-gray-800 text-white p-2 '>
      <h1 className='font-semibold py-6 text-2xl text-center'>App De Gatitos</h1>
      <div className='flex flex-col items-center justify-center'>
        {fact && <article className='m-4 px-2'>{fact}</article>}
        {img && <img
          className='' src={img} alt='ìmagen extraida desde una cat fact con 3 palabras'
          width={400} loading='lazy'
                />}
      </div>
    </section>

  )
}

export default App
