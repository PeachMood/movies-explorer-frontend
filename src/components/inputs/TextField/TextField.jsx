import classNames from 'classnames';

import './TextField.css';

export const TextField = ({ label, error, content = 'top', className, ...props }) => {
  const textFieldClasses = classNames('text-field', `text-field_content_${content}`, className);
  const errorClasses = classNames('text-field__error', `text-field__error_content_${content}`);

  return (
    <label className={textFieldClasses}>
      {error && content === 'top' && <span className={errorClasses}>{error}</span>}
      <span className="text-field__label">{label}</span>
      <input className="text-field__input" {...props} />
      {error && content === 'bottom' && <span className={errorClasses}>{error}</span>}
    </label>
  );
};
