import { Component } from "react";

export class Contacts extends Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
      return <ul>{
          this.props.contacts.map(contact => {
              console.log(contact);
              return <li key={contact.id}>{contact.name}</li>
      })}</ul>;
  }
}