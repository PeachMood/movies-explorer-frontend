import classNames from 'classnames';

import './TextField.css';

export const TextField = ({ label, error, name, content = 'top', className, ...props }) => {
  const containerClasses = classNames('text-field__container', `text-field__container_content_${content}`, className);
  const errorClasses = classNames('text-field__error', `text-field__error_content_${content}`);

  return (
    <div className="text-field">
      {content === 'top' && <span className={errorClasses}>{error}</span>}
      <div className={containerClasses}>
        <label htmlFor={name} className="text-field__label">{label}</label>
        <input className="text-field__input" name={name} {...props} />
      </div>
      {content === 'bottom' && <span className={errorClasses}>{error}</span>}
    </div>
  );
};
