import { useState } from 'react';
import './App.css'
import { Movies } from './components/Movies.jsx';
import { useMovies } from "./hooks/useMovies";
import { useEffect } from 'react';

function App() {
  const { movies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ query })
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startWith(' ')) return
    setQuery(event.target.value)

  }

  useEffect(() => {
    if (query === '') {
      setError('No se puede buscar una pelicula')
      return
    }

    if (query.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con solo números')
      return
    }

    if (query.length < 3) {
      setError('No se puede buscar una pelicula menor a 3 caracteres')
      return
    }

    setError(null)
  }, [query])

  return (
    <div className='page'>
      <header>
        <h1>Bucador De Peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name='query' placeholder="Avengers, Matrix, Nemo..." />
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
