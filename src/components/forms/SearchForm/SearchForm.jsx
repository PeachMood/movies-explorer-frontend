import { SearchInput } from '@components/inputs/SearchInput/SearchInput';
import { ToggleSwitch } from '@components/inputs/ToggleSwitch/ToggleSwitch';
import './SearchForm.css';

export const SearchForm = () => {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <SearchInput placeholder="Фильм" />
        <ToggleSwitch label="Короткометражки" />
      </form>
    </section>
  );
};
