import { useNavigate } from 'react-router-dom';

import { TextButton } from '@components/buttons/TextButton/TextButton';

import './NotFoundPage.css';

export const NotFoundPage = () => {
  const isLoggedIn = false;
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(!isLoggedIn ? '/' : 'movies', { replace: true });
  }

  return (
    <div className="not-found">
      <section className="not-found__content">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Страница не найдена</p>
        <TextButton className="not-found__button" text="Назад" color="accent" size="big" type="button" onClick={handleBack} />
      </section>
    </div>
  );
};
