import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, FormButton, FormInput, Label, LabelText } from './Form.styled';

export function Input(props) {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('')


  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break
      case 'number':
        setNumber(value);
        break
      default:
        return
    }
    setId(nanoid(5));
  };

  const onSubmit = event => {
    event.preventDefault();
    props.formHandlerSubmit({name, number, id});
    reset();
  };


  const reset = () => {
    setName('');
    setNumber('');
    setId('')
  };

    return (
      <Form onSubmit={onSubmit}>
        <Label>
          <LabelText>Name</LabelText>
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </Label>
        <Label> <LabelText>Number</LabelText>
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </Label>
        <FormButton type="submit">Add contact</FormButton>
      </Form>
    );
  }



Input.propTypes = {
    formHandlerSubmit: PropTypes.func,
  };