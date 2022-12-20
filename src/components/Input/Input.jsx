import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, FormButton, FormInput, Label, LabelText } from './Input.styled';

export class Input extends Component {

  static propTypes = {
    formHandlerSubmit: PropTypes.func,
  };

  state = {
    name: '',
    number: '',
    id: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value, id: nanoid(5),
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.formHandlerSubmit(this.state);
    this.reset();
  };


  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Label>
          <LabelText>Name</LabelText>
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Label>
        <Label> <LabelText>Number</LabelText>
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </Label>
        <FormButton type="submit">Add contact</FormButton>
      </Form>
    );
  }
}
