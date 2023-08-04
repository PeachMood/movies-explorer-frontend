export const BIRTHDAY = new Date('2002/03/14');

export const LOGIN_FORM = {
  title: 'Рады видеть!',
  button: 'Войти',
  navigation: 'Ещё не зарегистрированы?',
  textButton: 'Регистрация',
  link: '/signup',
};

export const REGISTER_FORM = {
  title: 'Добро пожаловать!',
  button: 'Зарегистрироваться',
  navigation: 'Уже зарегистрированы?',
  textButton: 'Войти',
  link: '/signin',
};

export const LOGIN_VALIDATION = {
  email: {
    required: 'Поле E-mail является обязательным.',
    type: 'Пожалуйста, введите корректный email-адрес.',
  },
  password: {
    required: 'Поле Пароль является обязательным.'
  },
};

export const REGISTER_VALIDATION = {
  name: {
    required: 'Поле Имя является обязательным.',
    minLength: 'Имя должно содержать не менее 2 символов.',
    maxLength: 'Имя должно содержать не более 30 символов.',
    pattern: 'Имя может содержать только латиницу, кириллицу, пробел или дефис.',
  },
  email: {
    required: 'Поле E-mail является обязательным.',
    type: 'Пожалуйста, введите корректный email-адрес.',
  },
  password: {
    required: 'Поле Пароль является обязательным.',
    minLength: 'Пароль должен содержать не менее 6 символов.',
    maxLength: 'Пароль должен содержать не более 20 символов.',
  },
};

export const MOVIES_VALIDATION = {
  query: {
    required: 'Нужно ввести ключевое слово.',
  },
};

export const PROFILE_VALIDATION = {
  name: {
    required: 'Поле Имя является обязательным.',
    minLength: 'Имя должно содержать не менее 2 символов.',
    maxLength: 'Имя должно содержать не более 30 символов.',
    pattern: 'Имя может содержать только латиницу, кириллицу, пробел или дефис.',
  },
  email: {
    required: 'Поле E-mail является обязательным.',
    type: 'Пожалуйста, введите корректный email-адрес.',
  },
};

export const DESKTOP_WINDOW_SIZE = 1028;
export const DESKTOP_CARDS_CONFIG = {
  minCount: 12,
  moreCount: 3,
  columns: 3,
};

export const TABLET_WINDOW_SIZE = 768;
export const TABLET_CARDS_CONFIG = {
  minCount: 8,
  moreCount: 2,
  columns: 2,
};

export const MOBILE_WINDOW_SIZE = 649;
export const MOBILE_CARDS_CONFIG = {
  minCount: 5,
  moreCount: 2,
  columns: 1,
};

export const DEFAULT_ERROR = 'Во время запроса произошла ошибка. Подождите немного и попробуйте ещё раз.';
export const PROFILE_SUCCESS = 'Данные пользователя успешно обновлены.';

export const MOVIES_SERVER_URL = 'https://api.nomoreparties.co';
export const SERVER_URL = process.env.NODE_ENV === 'production' ? 'https://api.movies.diploma.nomoredomains.rocks' : 'http://localhost:3000';
