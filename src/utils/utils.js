import { MOVIES_SERVER_URL } from '@utils/constants';

export const getCurrentYear = () => {
  return new Date().getFullYear();
}

export const getAge = (birthday) => {
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export const getDeclination = (age) => {
  const titles = [' год', ' года', ' лет'];
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[(age % 100 > 4 && age % 100 < 20) ? 2 : cases[(age % 10 < 5) ? age % 10 : 5]];
}

export const getTime = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours}ч ${minutes}м`;
};

export const isEmpty = (list) => {
  return list && list.length === 0;
};

const isShort = (movie) => {
  return movie.duration <= 40;
};

const includesQuery = (name, query) => {
  return name.toLowerCase().includes(query.toLowerCase());
};

const filterMovie = (movie, filters) => {
  return (
    (!filters.areShorts || (filters.areShorts && isShort(movie))) &&
    (includesQuery(movie.nameRU, filters.query) || includesQuery(movie.nameEN, filters.query))
  );
};

export const filterMovies = (movies, filters) => {
  return filters ? movies.filter(movie => filterMovie(movie, filters)) : movies;
};

export const formatMovie = (movie) => {
  return {
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    image: MOVIES_SERVER_URL + movie.image.url,
    trailerLink: movie.trailerLink,
    thumbnail: MOVIES_SERVER_URL + movie.image.formats.thumbnail.url,
    movieId: movie.id,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
  };
};

