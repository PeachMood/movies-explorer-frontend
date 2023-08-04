import classNames from 'classnames';

import { getTime } from '@utils/utils';

import './MoviesCard.css';

export const MoviesCard = ({ movie, button = 'delete', onClick }) => {
  const buttonClasses = classNames('movies-card__button', `movies-card__button_type_${button}`);

  const handleClick = () => {
    onClick(movie);
  };

  return (
    <figure className="movies-card">
      <figcaption className="movies-card__caption">
        <div className="movies-card__text">
          <h2 className="movies-card__name">{movie.nameRU}</h2>
          <p className="movies-card__duration">{getTime(movie.duration)}</p>
        </div>
        <button className={buttonClasses} type="button" onClick={handleClick} />
      </figcaption>
      <a className="movies-card__link" href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img className="movies-card__image" src={movie.image} alt={movie.nameRU} />
      </a>
    </figure>
  );
};
