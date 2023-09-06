import { useState } from 'react';

import { Header } from '@components/layout/Header/Header';
import { Movies } from '@components/layout/Movies/Movies';
import { Footer } from '@components/layout/Footer/Footer';
import { SearchForm } from '@components/forms/SearchForm/SearchForm';
import { MoviesCardList } from '@components/cards/MoviesCardList/MoviesCardList';
import { Alert } from '@components/utils/Alert/Alert';
import { useSavedMoviesContext } from '@hooks/useSavedMoviesContext';
import { UserApi } from '@utils/api/UserApi';
import { filterMovies, isEmpty } from '@utils/utils';

export const SavedMoviesPage = () => {
  const { savedMovies, getMovie, deleteMovie } = useSavedMoviesContext();
  const [filters, setFilters] = useState(null);
  const [error, setError] = useState(null);
  const foundMovies = filterMovies(savedMovies, filters);
  const isAlertShown = filters && isEmpty(foundMovies);

  const handleSearch = (filters) => {
    setFilters(filters);
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
        <SearchForm error={error} onSubmit={handleSearch} />
        {isAlertShown ? <Alert text="Ничего не найдено" /> : <MoviesCardList movies={foundMovies} areSavedMovies={true} onDelete={handleDelete} />}
      </main>
      <Footer />
    </Movies>
  );
};
