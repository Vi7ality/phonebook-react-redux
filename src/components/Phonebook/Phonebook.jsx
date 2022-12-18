import { Contacts } from 'components/Contacts/Contacts';
import { Input } from 'components/Input/Input';
import { Component } from 'react';


export class Phonebook extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
  contacts: [],

  }
  
  formHandlerSubmit = (data) => {
    console.log(data)
    this.setState(prevState =>
      {
      return {contacts: [...data]}
    })
  }



  render()
{  console.log(this.state)
    return (
      <div>
        <Input formHandlerSubmit={this.formHandlerSubmit}></Input>
        <Contacts></Contacts>
      </div>
    );
  }
}