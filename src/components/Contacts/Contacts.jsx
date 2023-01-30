import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';
import {
  ContactName,
  ContactNumber,
  ContactsItem,
  ContactsList,
  DeleteBtn,
} from './Contacts.styled';

export function Contacts() {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <div>
      <ContactsList>
        {visibleContacts.map(({ id, name, phone }) => {
          return (
            <ContactsItem key={id}>
              <ContactName>{name}:</ContactName>
              <ContactNumber href={`tel: ${phone}`}>{phone}</ContactNumber>
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
