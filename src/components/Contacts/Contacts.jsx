import { Component } from 'react';

export class Contacts extends Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    const { contacts, onClick } = this.props;

    return (
      <div>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                <p>{name}</p>
                <p>{number}</p>
                <button
                  type="button"
                  onClick={() => {
                    onClick(id);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
