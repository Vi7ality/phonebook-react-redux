import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilterQuery } from 'redux/selectors';
import { FilterInput, FilterLabelText } from './Filter.styled';

export function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectFilterQuery);

  const filterChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };
  return (
    <label>
      <FilterLabelText>Find contacts by name</FilterLabelText>
      <FilterInput
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={value}
        onChange={filterChange}
      />
    </label>
  );
}
