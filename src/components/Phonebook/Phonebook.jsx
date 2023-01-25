import { Contacts } from 'components/Contacts/Contacts';
import { Input } from 'components/Input/Input';
import { useState, useEffect } from 'react';
import { Filter } from 'components/Filter/Filter';
import { ContactsPart, PhonebookStyle, Title } from './Phonebook.styled';



export function Phonebook() {
  const LS_KEY = 'local_contacts';
  const savedContacts = localStorage.getItem(LS_KEY);
  const parsedContacts = JSON.parse(savedContacts);

// USE FILTER AND COTACTS TO CREATE appState
  const [contacts, setContacts] = useState(parsedContacts ?? [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const filterChange = event => {
    setFilter(event.currentTarget.value,
    );
  };

  const getVisibleContacts = () => {
    
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };


  const deleteContact = id => {
    setContacts(prevState => 
       [...prevState.filter(contact => contact.id !== id)]
    );
  };

  const formHandlerSubmit = data => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already exist in your contacts`);
      return;
    }
    setContacts(prevState => 
      [...prevState, data]
    );
  };


  useEffect(() => {

      localStorage.setItem(LS_KEY, JSON.stringify(contacts));
    
  },[contacts]);

  return (
    <PhonebookStyle>
      <div>
        <Title>Phonebook</Title>
        <Input formHandlerSubmit={formHandlerSubmit}></Input>
      </div>
      <ContactsPart>
        {' '}
        <Title>Contacts</Title>
        <Filter onChange={filterChange} value={filter}></Filter>
        <Contacts contacts={getVisibleContacts()} onClick={deleteContact}></Contacts>
      </ContactsPart>
    </PhonebookStyle>
  );
}
