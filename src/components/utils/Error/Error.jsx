import classNames from 'classnames';

import './Error.css';

export const Error = ({ text, className }) => {
  const classes = classNames('error', className);

  return (
    <p className={classes}>{text}</p>
  );
};
