import { Contacts } from 'components/Contacts/Contacts';
import { Input } from 'components/Input/Input';
import { useEffect } from 'react';
import { Filter } from 'components/Filter/Filter';
import { ContactsPart, PhonebookStyle, Title } from './Phonebook.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

export function Phonebook() {
  // const LS_KEY = 'local_contacts';
  // const savedContacts = localStorage.getItem(LS_KEY);
  // const parsedContacts = JSON.parse(savedContacts);

  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const formHandlerSubmit = data => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already exist in your contacts`);
      return;
    }
    dispatch(addContact(data));
  };

  // useEffect(() => {

  //     localStorage.setItem(LS_KEY, JSON.stringify(contacts));

  // },[contacts]);

  return (
    <PhonebookStyle>
      <div>
        <Title>Phonebook</Title>
        <Input formHandlerSubmit={formHandlerSubmit}></Input>
      </div>
      <ContactsPart>
        <Title>Contacts</Title>
        <Filter></Filter>
        <Contacts></Contacts>
      </ContactsPart>
    </PhonebookStyle>
  );
}
