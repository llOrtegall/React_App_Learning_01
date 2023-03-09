import { searchMovies } from "../services/movies.js";
import { useState, useRef } from "react";


export function useMovies({ search }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const previosSearh = useRef(search);

  const getMovies = async () => {
    if (search === previosSearh.current) return

    try {
      setLoading(true)
      setError(null)
      previosSearh.current = search
      const newmovies = await searchMovies({ search })
      setMovies(newmovies);
    } catch (e) {
      setError(e.message || e);
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return { movies, getMovies, loading }
}
