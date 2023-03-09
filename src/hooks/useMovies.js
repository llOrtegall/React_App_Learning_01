import { searchMovies } from "../services/movies.js";
import { useState, useRef, useMemo, useCallback } from "react";

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previosSearh = useRef(search);

  const getMovies = useCallback(async ({ search }) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const sortedMovies = useMemo(() => {
    // console.log('memoSortedMovies')
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies]);
  return { movies: sortedMovies, getMovies, loading }
}
