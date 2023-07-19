import { Header } from '@components/layout/Header/Header';
import { Movies } from '@components/layout/Movies/Movies';
import { Footer } from '@components/layout/Footer/Footer';
import { SearchForm } from '@components/forms/SearchForm/SearchForm';
import { MoviesCardList } from '@components/cards/MoviesCardList/MoviesCardList';
import { savedMovies } from '@utils/constants';

export const SavedMoviesPage = () => {
  return (
    <Movies>
      <Header />
      <main className="movies__content">
        <SearchForm />
        <MoviesCardList movies={savedMovies} isSavedMovies={true} />
      </main>
      <Footer />
    </Movies>
  );
};
