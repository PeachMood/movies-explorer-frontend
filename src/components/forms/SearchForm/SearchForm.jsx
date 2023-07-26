import { SearchInput } from '@components/inputs/SearchInput/SearchInput';
import { ToggleSwitch } from '@components/inputs/ToggleSwitch/ToggleSwitch';
import './SearchForm.css';

export const SearchForm = () => {
  return (
    <section className="search-form" aria-label="поиск фильмов">
      <form className="search-form__form">
        <SearchInput placeholder="Фильм" required />
        <ToggleSwitch label="Короткометражки" />
      </form>
    </section>
  );
};
