import classNames from 'classnames';

import './Button.css';

export const Button = ({ text, size = 'medium', color = 'default', className, ...props }) => {
  const classes = classNames('button', `button_size_${size}`, `button_color_${color}`, className);

  return (
    <button className={classes} {...props}>{text}</button>
  );
}
