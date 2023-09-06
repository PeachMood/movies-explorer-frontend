import { MOVIES_VALIDATION } from '@utils/constants';
import { SearchInput } from '@components/inputs/SearchInput/SearchInput';
import { ToggleSwitch } from '@components/inputs/ToggleSwitch/ToggleSwitch';
import { Error } from '@components/utils/Error/Error';
import { useForm } from '@hooks/useForm';

import './SearchForm.css';

export const SearchForm = ({ filters, error, isDisabled, onSubmit }) => {
  const { handleChange, handleSubmit, values, errors } = useForm({ defaultValues: filters, mode: 'onSubmit', options: MOVIES_VALIDATION });

  return (
    <section className="search-form" aria-label="поиск фильмов">
      <form className="search-form__form" noValidate onSubmit={handleSubmit(onSubmit)} >
        <SearchInput
          name="query" required
          placeholder="Фильм" isDisabled={isDisabled}
          value={values?.query || ''} onChange={handleChange} />
        <ToggleSwitch
          name="areShorts"
          label="Короткометражки"
          checked={values?.areShorts || false} onChange={handleChange} />
      </form>
      <Error className="search-form__error" font="big" text={errors.query || error} />
    </section>
  );
};
