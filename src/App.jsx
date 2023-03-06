import './App.css'
import responseMovies from "./mocks/with-result.json";
import withOutResults from "./mocks/with-no-result.json";

function App() {

  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0;

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
        {
          hasMovies ? (
            <ul>
              {
                movies.map(movie => (
                  <li key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                    <img src={movie.Poster} alt={movie.Title} />
                  </li>
                ))
              }
            </ul>
          ) :
            (
              <p>No se encontraron Peliculas para esta busqueda</p>
            )
        }
      </main>

    </div>
  )
}

export default App
