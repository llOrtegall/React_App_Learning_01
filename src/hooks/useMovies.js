import responseMovies from "../mocks/with-result.json";
import withoutResult from "../mocks/with-no-result.json";

export function useMovies() {
  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    image: movie.Poster,
  }))

  return { movies: mappedMovies }
}
