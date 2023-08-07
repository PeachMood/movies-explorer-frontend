import { useState, useEffect } from 'react';

export const useMoviesSearch = () => {
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState(null);

  useEffect(() => {
    setMovies(JSON.parse(localStorage.getItem('movies')) || []);
    setFilters(JSON.parse(localStorage.getItem('filters')));
  }, []);

  const saveMovies = (movies) => {
    localStorage.setItem('movies', JSON.stringify(movies));
    setMovies(movies);
  };

  const saveFilters = (filters) => {
    localStorage.setItem('filters', JSON.stringify(filters));
    setFilters(filters);
  };

  return { movies, filters, saveMovies, saveFilters };
};
