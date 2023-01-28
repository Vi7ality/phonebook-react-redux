import { Contacts } from 'components/Contacts/Contacts';
import { Input } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactsPart, PhonebookStyle, Title } from './Phonebook.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import Notiflix from 'notiflix';

export function Phonebook() {

  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const formHandlerSubmit = data => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      Notiflix.Notify.failure(`${data.name} is already exist in your contacts`);
      return;
    }
    dispatch(addContact(data));
  };

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
