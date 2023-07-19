import classNames from 'classnames';

import './TextField.css';

export const TextField = ({ label, error, content = 'top', className, ...props }) => {
  const textFieldClasses = classNames('text-field', className);
  const labelClasses = classNames('text-field__label', `text-field__label_content_${content}`);
  const inputClasses = classNames('text-field__input', `text-field__input_content_${content}`);
  const errorClasses = classNames('text-field__error', `text-field__error_content_${content}`);

  return (
    <label className={textFieldClasses}>
      {error && content === 'top' && <span className={errorClasses}>{error}</span>}
      <span className={labelClasses}>{label}</span>
      <input className={inputClasses} {...props} />
      {error && content === 'bottom' && <span className={errorClasses}>{error}</span>}
    </label>
  );
};
