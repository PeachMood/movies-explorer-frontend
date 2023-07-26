import classNames from 'classnames';

import { getTime } from '@utils/time';

import './MoviesCard.css';

export const MoviesCard = ({ movie, isSavedMovies }) => {
  let buttonType = 'remove';
  if (!isSavedMovies) {
    buttonType = movie.isSaved ? 'saved' : 'unsaved';
  }
  const buttonClasses = classNames('movies-card__button', `movies-card__button_type_${buttonType}`);

  return (
    <figure className="movies-card">
      <figcaption className="movies-card__caption">
        <div className="movies-card__text">
          <h2 className="movies-card__name">{movie.name}</h2>
          <p className="movies-card__duration">{getTime(movie.duration)}</p>
        </div>
        <button className={buttonClasses} />
      </figcaption>
      <img className="movies-card__image" src={movie.image} alt={movie.name} />
    </figure>
  );
};
