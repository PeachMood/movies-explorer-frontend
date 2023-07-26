import { Header } from '@components/layout/Header/Header';
import { Movies } from '@components/layout/Movies/Movies';
import { Footer } from '@components/layout/Footer/Footer';
import { SearchForm } from '@components/forms/SearchForm/SearchForm';
import { MoviesCardList } from '@components/cards/MoviesCardList/MoviesCardList';
import { movies } from '@utils/constants';

export const MoviesPage = () => {
  return (
    <Movies>
      <Header />
      <main className="movies__content">
        <SearchForm />
        <MoviesCardList movies={movies} />
      </main>
      <Footer />
    </Movies>
  );
};
