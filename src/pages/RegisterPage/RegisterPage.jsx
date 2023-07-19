import { Form } from '@components/forms/Form/Form';
import { Input } from '@components/inputs/Input/Input';

export const RegisterPage = () => {
  const config = {
    title: 'Добро пожаловать!',
    button: 'Зарегистрироваться',
    navigation: 'Уже зарегистрированы?',
    textButton: 'Войти',
    link: '/signin',
  };

  return (
    <div className="auth">
      <Form config={config} noValidate>
        <fieldset className="auth__content auth__content_type_register">
          <Input
            label="Имя"
            autoComplete="name"
            type="text"
            placeholder="Укажите имя"
            required />
          <Input
            label="E-mail"
            autoComplete="email"
            type="email"
            placeholder="Укажите электронную почту"
            required />
          <Input
            label="Пароль"
            autoComplete="password"
            type="password"
            placeholder="Придумайте пароль"
            required />
        </fieldset>
      </Form>
    </div>
  );
};
