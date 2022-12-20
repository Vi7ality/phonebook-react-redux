import { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactName, ContactNumber, ContactsItem, ContactsList, DeleteBtn } from './Contacts.styled';

export class Contacts extends Component {

  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { contacts, onClick } = this.props;

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
}
