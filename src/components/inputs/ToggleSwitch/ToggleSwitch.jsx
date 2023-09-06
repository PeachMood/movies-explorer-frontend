import classNames from 'classnames';

import './ToggleSwitch.css';

export const ToggleSwitch = ({ label, className, isDisabled, ...props }) => {
  const classes = classNames('toggle-switch', className);

  return (
    <div className={classes}>
      {label}
      <div className="toggle-switch__container">
        <input className="toggle-switch__checkbox" type="checkbox" disabled={isDisabled} {...props} />
        <span className="toggle-switch__slider" />
      </div>
    </div>
  );
}
