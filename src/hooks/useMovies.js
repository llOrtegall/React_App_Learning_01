//import withResults from "../mocks/with-result.json";
import withoutResult from "../mocks/with-no-result.json";
import { useState } from "react";

export function useMovies({ search }) {

  const [responseMovies, setResponseMovies] = useState([]);

  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    image: movie.Poster,
  }))

  const getMovies = () => {
    if (search) {
      //setResponseMovies(withResults);
      fetch(`https://omdbapi.com/?apikey=34612a64&s=${search}`)
        .then(res => res.json())
        .then(json => {
          setResponseMovies(json)
        })
    } else {
      setResponseMovies(withoutResult)
    }
  }
  return { movies: mappedMovies, getMovies }
}
