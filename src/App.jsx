import './App.css'
import { Movies } from './components/Movies.jsx';
import { useMovies } from "./hooks/useMovies";

function App() {
  const { movies } = useMovies()

  return (
    <div className='page'>
      <header>
        <h1>Bucador De Peliculas</h1>
        <form className="form">
          <input placeholder="Avengers, Matrix, Nemo..." />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div >
  )
}

export default App
