import PropTypes from 'prop-types';
import { ContactName, ContactNumber, ContactsItem, ContactsList, DeleteBtn } from './Contacts.styled';



export function Contacts(props) {

    const { contacts, onClick } = props;

    return (
      <div>
        <ContactsList>
          {contacts.map(({ id, name, number }) => {
            return (
              <ContactsItem key={id}>
                <ContactName>{name}:</ContactName>
                <ContactNumber href={`tel: ${number}`}>{number}</ContactNumber>
                <DeleteBtn
                  type="button"
                  onClick={() => {
                    onClick(id);
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



Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
  };