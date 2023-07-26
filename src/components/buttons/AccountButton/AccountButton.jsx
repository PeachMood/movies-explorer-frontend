import classNames from 'classnames';

import './AccountButton.css';

export const AccountButton = ({ className, ...props }) => {
  const classes = classNames('account-button', className);
  return (
    <button className={classes}  {...props} type="button">Аккаунт</button>
  );
}
