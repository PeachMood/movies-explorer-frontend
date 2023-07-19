import classNames from 'classnames';

import './ToggleSwitch.css';

export const ToggleSwitch = ({ label, className, ...props }) => {
  const classes = classNames('toggle-switch', className);

  return (
    <label className={classes}>
      {label}
      <div className="toggle-switch__container">
        <input className="toggle-switch__checkbox" type="checkbox" {...props} />
        <span className="toggle-switch__slider" />
      </div>
    </label >
  );
}
