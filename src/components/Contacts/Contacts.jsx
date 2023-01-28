
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/actions';
import { getContacts, getFilterQuery } from 'redux/selectors';
import { ContactName, ContactNumber, ContactsItem, ContactsList, DeleteBtn } from './Contacts.styled';



export function Contacts() {


  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

    const filterQuery = useSelector(getFilterQuery);
  const getVisibleContacts = () => {
    const normalizedFilterQuery = filterQuery.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilterQuery)
    );
  };

  const visibleContacts = getVisibleContacts()
  

    return (
      <div>
        <ContactsList>
          {visibleContacts.map(({ id, name, number }) => {
            return (
              <ContactsItem key={id}>
                <ContactName>{name}:</ContactName>
                <ContactNumber href={`tel: ${number}`}>{number}</ContactNumber>
                <DeleteBtn
                  type="button"
                  onClick={() => {
                    dispatch(deleteContact(id));
                  }}
                >
                  Delete
                </DeleteBtn>
              </ContactsItem>
            );
          })}
        </ContactsList>
      </div>
    );
  }

