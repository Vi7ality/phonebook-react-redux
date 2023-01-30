import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, FormButton, FormInput, Label, LabelText } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import Notiflix from 'notiflix';
import { addContact } from 'redux/operations';

export function Input() {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [id, setId] = useState('')

  const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break
      case 'phone':
        setPhone(value);
        break
      default:
        return
    }
    setId(nanoid(5));
  };

  const onSubmit = event => {
    event.preventDefault();
        if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notiflix.Notify.failure(`${name} is already exist in your contacts`);
      return;
    }
    dispatch(addContact({name, phone, id}));
    reset();
  };


  const reset = () => {
    setName('');
    setPhone('');
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
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
            onChange={handleChange}
          />
        </Label>
        <FormButton type="submit">Add contact</FormButton>
      </Form>
    );
  }
