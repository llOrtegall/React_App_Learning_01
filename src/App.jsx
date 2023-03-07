import './App.css'
import { Movies } from './components/Movies.jsx';
import { useMovies } from "./hooks/useMovies";
import { useEffect, useState, useRef } from 'react';

function useSearch() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('No se puede buscar una pelicula vacía')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con solo números')
      return
    }
    if (search.length < 3) {
      setError('No se puede buscar una pelicula menor a 3 caracteres')
      return
    }
    setError(null)
  }, [search])
  return { search, setSearch, error }
}

function App() {
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }
  const handleChange = (event) => {
    setSearch(event.target.value)
  }


  return (
    <div className='page'>
      <header>
        <h1>Bucador De Peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input style={{
            border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent'
          }} onChange={handleChange} value={search} name='query' placeholder="Avengers, Matrix, Nemo..." />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div >
  )
}

export default App
