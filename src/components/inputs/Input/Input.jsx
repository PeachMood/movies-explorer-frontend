import classNames from 'classnames';

import './Input.css';

export const Input = ({ error, label, className, ...props }) => {
  const labelClasses = classNames('input', className);
  const inputClasses = classNames('input__field', error && `input__field_type_invalid`);

  return (
    <label className={labelClasses}>
      {label}
      <input className={inputClasses} {...props} />
      <span className="input__error">{error}</span>
    </label>
  );
};
