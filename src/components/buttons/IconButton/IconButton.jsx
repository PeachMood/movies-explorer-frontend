import classNames from 'classnames';

import './IconButton.css';

export const IconButton = ({ text, icon, className, ...props }) => {
  const classes = classNames('icon-button', className);
  return (
    <button className={classes}  {...props} >
      {text}
      <div className="icon-button__icon" style={{ backgroundImage: `url(${icon})` }} />
    </button>
  );
}
