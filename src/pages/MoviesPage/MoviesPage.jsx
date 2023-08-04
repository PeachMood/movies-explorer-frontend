import { useState } from 'react';

import { DEFAULT_ERROR } from '@utils/constants';
import { Header } from '@components/layout/Header/Header';
import { Movies } from '@components/layout/Movies/Movies';
import { Footer } from '@components/layout/Footer/Footer';
import { SearchForm } from '@components/forms/SearchForm/SearchForm';
import { MoviesCardList } from '@components/cards/MoviesCardList/MoviesCardList';
import { Preloader } from '@components/utils/Preloader/Preloader';
import { Alert } from '@components/utils/Alert/Alert';
import { useSavedMoviesContext } from '@hooks/useSavedMoviesContext';
import { useMoviesSearch } from '@hooks/useMoviesSearch';
import { MoviesApi } from '@utils/api/MoviesApi';
import { UserApi } from '@utils/api/UserApi';
import { filterMovies, formatMovie, isEmpty } from '@utils/utils';

export const MoviesPage = () => {
  const { getMovie, saveMovie, deleteMovie } = useSavedMoviesContext();
  const { movies, filters, saveMovies, saveFilters } = useMoviesSearch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const foundMovies = filterMovies(movies, filters);
  const isAlertShown = filters && isEmpty(foundMovies);

  const handleSearch = (filters) => {
    if (isEmpty(movies)) {
      const api = new MoviesApi();
      setIsLoading(true);
      api.getMovies()
        .then(response => {
          const movies = response.map(movie => formatMovie(movie));
          saveMovies(movies);
          setError(null);
        })
        .catch(() => setError(DEFAULT_ERROR))
        .finally(() => setIsLoading(false));
    }
    saveFilters(filters);
  };

  const handleSave = (movie) => {
    const api = new UserApi();
    api.saveMovie(movie)
      .then(movie => {
        saveMovie(movie)
        setError(null);
      })
      .catch(error => setError(error));
  };

  const handleDelete = ({ movieId }) => {
    const api = new UserApi();
    const movie = getMovie(movieId);
    api.deleteMovie(movie._id)
      .then(() => {
        deleteMovie(movie)
        setError(null);
      })
      .catch(error => setError(error));
  };

  return (
    <Movies>
      <Header />
      <main className="movies__content">
        <SearchForm filters={filters} error={error} isDisabled={isLoading} onSubmit={handleSearch} />
        {isLoading ? (
          <Preloader />
        ) : (
          isAlertShown ? <Alert text="Ничего не найдено" /> : <MoviesCardList movies={foundMovies} onSave={handleSave} onDelete={handleDelete} />
        )}
      </main>
      <Footer />
    </Movies>
  );
};
