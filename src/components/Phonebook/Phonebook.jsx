import { Contacts } from 'components/Contacts/Contacts';
import { Input } from 'components/Input/Input';
import { Component } from 'react';
import { Filter } from 'components/Filter/Filter';
import { ContactsPart, PhonebookStyle, Title } from './Phonebook.styled';

const LS_KEY = 'local_contacts';

export class Phonebook extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  filterChange = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  formHandlerSubmit = data => {
    console.log(data);
    this.setState(prevState => {
      return { contacts: [data, ...prevState.contacts] };
    });
  };

  componentDidMount() {
    const savedState = localStorage.getItem(LS_KEY);
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      this.setState({contacts: parsedState})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
      

  }

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <PhonebookStyle>
        <div>
          <Title>Phonebook</Title>
          <Input formHandlerSubmit={this.formHandlerSubmit}></Input>
        </div>
        <ContactsPart>
          {' '}
          <Title>Contacts</Title>
          <Filter
            onChange={this.filterChange}
            value={this.state.filter}
          ></Filter>
          <Contacts
            contacts={visibleContacts}
            onClick={this.deleteContact}
          ></Contacts>
        </ContactsPart>
      </PhonebookStyle>
    );
  }
}
