import { Link } from 'react-router-dom';
import classNames from 'classnames';

import './Logo.css';

export const Logo = ({ className }) => {
  const logoClassNames = classNames(className, 'logo');

  return (
    <Link className={logoClassNames} to='/' />
  );
};
