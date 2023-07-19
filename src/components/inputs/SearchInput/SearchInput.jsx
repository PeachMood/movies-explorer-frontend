import classNames from 'classnames';
import './SearchInput.css';

export const SearchInput = ({ className, ...props }) => {
  const classes = classNames('search-input', className);

  return (
    <label className={classes}>
      <input className="search-input__input" {...props} />
      <button className="search-input__button" />
    </label>
  );
};
