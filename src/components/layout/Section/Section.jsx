import classNames from 'classnames';

import './Section.css';

export const Section = ({ title, className, children }) => {
  return (
    <section className={classNames(className)}>
      <div className={classNames('section-content', `${className}__content`)}>
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </div>
    </section >
  );
};
