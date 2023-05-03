import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactsForm.module.css';

export class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
    };
    
    handlerSubmit = (e) => {
        e.preventDefault();
      const isContactExists = this.props.addContact({ id: nanoid(5), ...this.state });
      if (!isContactExists) {
        this.reset();
      }
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    reset = () => {
        this.setState({
        name: '',
        number: '',
        })
    }

  render() {
    return (
      <form
        className={css.phonebook__form}
        onSubmit={this.handlerSubmit}>
        <label className={css.phonebook__label}>
          Name
          <input
            className={css.phonebook__input}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
          />
        </label>

        <label className={css.phonebook__label}>
          Number
          <input
            className={css.phonebook__input}
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
          />
        </label>
        <button className={css.phonebook__add}>Add Contact</button>
      </form>
    );
  }
}
