import { Component } from "react";

export class Filter extends Component {
      static defaultProps = {};

    static propTypes = {};
    
    state = {
        filter: '',
  }

  render() {
      return <label>Find contacts by name
        <input
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.props.value}
            onChange={this.props.onChange}
          /> 
    </label>
  }

}