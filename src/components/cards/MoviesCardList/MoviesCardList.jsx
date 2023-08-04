import { Button } from '@components/buttons/Button/Button';
import { MoviesCard } from '@components/cards/MoviesCard/MoviesCard';
import { List } from '@components/utils/List/List';
import { Alert } from '@components/utils/Alert/Alert';
import { useSavedMoviesContext } from '@hooks/useSavedMoviesContext';
import { useMovieCards } from '@hooks/useMovieCards';
import { isEmpty } from '@utils/utils';

import './MoviesCardList.css';

export const MoviesCardList = ({ movies, areSavedMovies, onSave, onDelete }) => {
  const { isSaved } = useSavedMoviesContext();
  const { cardsCount, loadCards } = useMovieCards({ cards: movies });
  const isButtonShown = movies.length > cardsCount;

  const renderMovie = (movie) => {
    const button = areSavedMovies ? 'delete' : (isSaved(movie) ? 'saved' : 'unsaved');
    const handleClick = isSaved(movie) ? onDelete : onSave;

    return (
      <MoviesCard key={movie.movieId} movie={movie} button={button} onClick={handleClick} />
    );
  };

  return (
    isEmpty(movies) ? (
      <Alert text="Упс... Список пуст" />
    ) : (
      <section className="movies-card-list" aria-label="список фильмов">
        <List className={{ list: 'movies-card-list__list' }}>
          {(areSavedMovies ? movies : movies.slice(0, cardsCount)).map(movie => renderMovie(movie))}
        </List>
        {isButtonShown && <Button className="movies-card-list__button" text="Ещё" size="big" type="button" onClick={() => loadCards()} />}
      </section>
    )
  );
};
