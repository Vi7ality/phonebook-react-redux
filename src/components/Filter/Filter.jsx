import PropTypes from 'prop-types';
import { FilterInput, FilterLabelText } from './Filter.styled';

export function Filter({value, onChange}) {
  return (
    <label>
      <FilterLabelText>Find contacts by name</FilterLabelText>
      <FilterInput
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
