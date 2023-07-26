import { useNavigate } from 'react-router-dom';

import { Auth } from '@components/layout/Auth/Auth';
import { Form } from '@components/forms/Form/Form';
import { Input } from '@components/inputs/Input/Input';
import { useAuthContext } from '@hooks/useAuthContext';

export const LoginPage = () => {
  const { setIsLoggedIn } = useAuthContext();
  const navigate = useNavigate();
  const config = {
    title: 'Рады видеть!',
    button: 'Войти',
    navigation: 'Ещё не зарегистрированы?',
    textButton: 'Регистрация',
    link: '/signup',
  };

  const handleLoginClick = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    navigate('/movies', { replace: true });
  };

  return (
    <main>
      <Auth>
        <Form config={config} onSubmit={handleLoginClick} >
          <fieldset className="auth__content auth__content_type_login">
            <Input
              label="E-mail"
              autoComplete="email"
              type="email"
              placeholder="Укажите почту"
              required />
            <Input
              label="Пароль"
              autoComplete="current-password"
              type="password"
              placeholder="Укажите пароль"
              required />
          </fieldset>
        </Form>
      </Auth>
    </main>
  );
};
