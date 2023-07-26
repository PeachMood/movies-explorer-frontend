import { useEffect, useState } from 'react';
import { Button } from '@components/buttons/Button/Button';
import { MoviesCard } from '@components/cards/MoviesCard/MoviesCard';
import { List } from '@components/utils/List/List';
import { useWindowSize } from '@hooks/useWindowSize';
import { desktop, tablet, mobile } from '@utils/constants'

import './MoviesCardList.css';

export const MoviesCardList = ({ movies, isSavedMovies }) => {
  const windowSize = useWindowSize();
  const [cardsCount, setCardsCount] = useState(desktop.cardsCount);

  useEffect(() => {
    if (windowSize[0] > tablet.width) {
      setCardsCount(desktop.cardsCount);
    } else if (windowSize[0] <= mobile.width) {
      setCardsCount(mobile.cardsCount);
    } else {
      setCardsCount(tablet.cardsCount);
    }
  }, [windowSize]);

  return (
    <section className="movies-card-list" aria-label="список фильмов">
      <List className={{ list: 'movies-card-list__list' }}>
        {movies.slice(0, cardsCount).map(movie => <MoviesCard key={movie.image} movie={movie} isSavedMovies={isSavedMovies} />)}
      </List>
      <Button size="big" text="Ещё" className="movies-card-list__button" type="button" />
    </section>
  );
};
