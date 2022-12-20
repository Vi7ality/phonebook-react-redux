import { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterInput, FilterLabelText } from './Filter.styled';
export class Filter extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };

  state = {
    filter: '',
  };

  render() {
    return (
      <label>
        <FilterLabelText>Find contacts by name</FilterLabelText>
        <FilterInput
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </label>
    );
  }
}
