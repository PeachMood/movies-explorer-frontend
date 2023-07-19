import car from '@assets/images/car.png';
import polaroid from '@assets/images/polaroid.png';
import guitar from '@assets/images/guitar.png';
import hall from '@assets/images/hall.png';
import teenagers from '@assets/images/teenagers.png';
import cleaning from '@assets/images/cleaning.png';
import thinkers from '@assets/images/thinkers.png';
import graffiti from '@assets/images/graffiti.png';
import marathon from '@assets/images/marathon.png';
import party from '@assets/images/party.png';
import smoking from '@assets/images/smoking.png';
import work from '@assets/images/work.png';

export const birthday = new Date('2002/03/14');

export const desktop = {
  width: 1280,
  cardsCount: 12,
};

export const tablet = {
  width: 768,
  cardsCount: 8,
};

export const mobile = {
  width: 480,
  cardsCount: 5,
};

export const movies = [
  {
    name: '33 слова о дизайне',
    duration: 6420,
    image: car,
    isSaved: false,
  },
  {
    name: '33 слова о дизайне',
    duration: 6420,
    image: polaroid,
    isSaved: false,
  },
  {
    name: '33 слова о дизайне',
    duration: 6420,
    image: guitar,
    isSaved: true,
  },
  {
    name: '33 слова о дизайне',
    duration: 6420,
    image: hall,
    isSaved: false,
  },
  {
    name: '33 слова о дизайне',
    duration: 6420,
    image: teenagers,
    isSaved: true,
  },
  {
    name: '33 слова о дизайне',
    duration: 6420,
    image: cleaning,
    isSaved: false,
  },
  {
    name: '33 слова о дизайне',
    duration: 6420,
    image: thinkers,
    isSaved: false,
  },
  {
    name: '33 слова о дизайне',
    duration: 6420,
    image: graffiti,
    isSaved: false,
  },
  {
    name: '33 слова о дизайне',
    duration: 6420,
    image: marathon,
    isSaved: false,
  },
  {
    name: '33 слова о дизайне',
    duration: 6420,
    image: party,
    isSaved: true,
  },
  {
    name: '33 слова о дизайне',
    duration: 6420,
    image: smoking,
    isSaved: false,
  },
  {
    name: '33 слова о дизайне',
    duration: 6420,
    image: work,
    isSaved: false,
  },
];

export const savedMovies = movies.filter(movie => movie.isSaved);
