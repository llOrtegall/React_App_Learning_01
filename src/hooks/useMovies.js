import { searchMovies } from "../services/movies.js";
import { useState, useRef, useMemo } from "react";


export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const previosSearh = useRef(search);

  const getMovies = useMemo(() => {
    return async ({ search }) => {
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
  }, [])

  // const getSortedMovies = () => {
  //   console.log('getSortedMovies')
  //   const sortedMovies = sort
  //     ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //     : movies
  //   return sortedMovies
  // }

  const sortedMovies = useMemo(() => {
    console.log('memoSortedMovies')
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies]);
  return { movies: sortedMovies, getMovies, loading }
}
