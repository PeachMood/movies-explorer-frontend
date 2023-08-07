import classNames from 'classnames';
import './SearchInput.css';

export const SearchInput = ({ className, isDisabled, ...props }) => {
  const classes = classNames('search-input', className);

  return (
    <div className={classes} >
      <input className="search-input__input" disabled={isDisabled} {...props} />
      <button className="search-input__button" disabled={isDisabled} />
    </div>
  );
};
