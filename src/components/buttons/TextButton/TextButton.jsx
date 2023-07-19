import classNames from 'classnames';

import './TextButton.css';

export const TextButton = ({ text, isBold, isUnderlined, size = 'medium', color = 'dark', className, ...props }) => {
  const classes = classNames(
    'text-button',
    isBold && 'text-button_bold',
    isUnderlined && 'text-button_underlined',
    `text-button_size_${size}`,
    `text-button_color_${color}`,
    className,
  );

  return (
    <button className={classes} {...props} >{text}</button>
  );
}
