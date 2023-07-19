import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import { Button } from '@components/buttons/Button/Button';
import { TextButton } from '@components/buttons/TextButton/TextButton';
import { Logo } from '@components/utils/Logo/Logo';
import { Error } from '@components/utils/Error/Error';

import './Form.css';

export const Form = ({ config, className, children, ...props }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(config.link);
  }

  return (
    <form className={classNames('form', className)} {...props} >
      <Logo className="form__logo" />
      <h1 className="form__title">{config.title}</h1>
      {children}
      <Error className="form__error" />
      <Button className="form__button" text={config.button} type="submit" color="accent" />
      <div className="form__navigation">
        {config.navigation}
        <TextButton className="form__text-button" text={config.textButton} color="accent" type="button" onClick={handleButtonClick} />
      </div>
    </form>
  );
};
