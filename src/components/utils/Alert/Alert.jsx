import classNames from 'classnames';

import './Alert.css';

export const Alert = ({ text, type = 'empty' }) => {
  const iconClasses = classNames('alert__icon', `alert__icon_type_${type}`);
  const textClasses = classNames('alert__text', `alert__text_type_${type}`);

  return (
    <section className="alert">
      <div className={iconClasses} />
      <p className={textClasses}>{text}</p>
    </section>
  );
};
