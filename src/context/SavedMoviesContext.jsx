import { createContext, useEffect, useState } from 'react';

import { useAuthContext } from '@hooks/useAuthContext';
import { usePopupContext } from '@hooks/usePopupContext';
import { UserApi } from '@utils/api/UserApi';

export const SavedMoviesContext = createContext(null);

export const SavedMoviesProvider = ({ children }) => {
  const { isLoggedIn } = useAuthContext();
  const { setError } = usePopupContext();
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      const api = new UserApi();
      api.getMovies()
        .then(savedMovies => setSavedMovies(savedMovies))
        .catch(error => setError(error));
    }
  }, [isLoggedIn, setError]);

  const getMovie = (movieId) => {
    return savedMovies.find(movie => movie.movieId === movieId);
  };

  const isSaved = (movie) => {
    return savedMovies.some(other => movie.movieId === other.movieId);
  };

  const saveMovie = (movie) => {
    setSavedMovies(savedMovies => [...savedMovies, movie]);
  };

  const deleteMovie = (movie) => {
    setSavedMovies(savedMovies => savedMovies.filter(other => movie._id !== other._id));
  };

  return (
    <SavedMoviesContext.Provider value={{ savedMovies, getMovie, isSaved, saveMovie, deleteMovie }}>
      {children}
    </SavedMoviesContext.Provider>
  );
};
