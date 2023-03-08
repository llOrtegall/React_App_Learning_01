//import withResults from "../mocks/with-result.json";
//import withoutResult from "../mocks/with-no-result.json";
import { useState } from "react";
import { searchMovies } from "../services/movies.js";

export function useMovies({ search }) {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const newmovies = await searchMovies({ search })
    setMovies(newmovies);
  }
  return { movies, getMovies }
}
