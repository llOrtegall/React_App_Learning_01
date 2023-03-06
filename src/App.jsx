import './App.css'
import { Movies } from './components/Movies.jsx';
import responseMovies from "./mocks/with-result.json";


function App() {
  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }))

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
        <Movies movies={mappedMovies} />
      </main>
    </div >
  )
}

export default App
