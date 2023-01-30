import { Contacts } from 'components/Contacts/Contacts';
import { Input } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactsPart, PhonebookStyle, Title } from './Phonebook.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export function Phonebook() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <PhonebookStyle>
      <div>
        <Title>Phonebook</Title>
        <Input></Input>
      </div>
      <ContactsPart>
        <Title>Contacts</Title>
        <Filter></Filter>
        <Contacts></Contacts>
        {isLoading && !error && <p>Loading...</p>}
      </ContactsPart>

    </PhonebookStyle>
  );
}
