import classNames from 'classnames';

import './Error.css';

export const Error = ({ text, font = 'medium', className }) => {
  const classes = classNames('error', `error_font_${font}`, className);

  return (
    <p className={classes}>{text}</p>
  );
};
