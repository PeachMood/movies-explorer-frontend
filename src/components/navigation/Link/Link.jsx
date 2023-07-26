import classNames from 'classnames';

import './Link.css';

export const Link = ({ text, size = 'medium', weight = 'normal', className, ...props }) => {
  const classes = classNames('link', `link_size_${size}`, `link_weight_${weight}`, className);

  return (
    <a className={classes} {...props}>{text}</a>
  );
}
