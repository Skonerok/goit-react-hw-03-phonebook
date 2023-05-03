import React, { Component } from 'react'
import { ContactsForm } from "./ContactsForm/ContactsForm";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: ""
  };

  handleAddContact = (contact) => {
    if (this.state.contacts.some((item) => item.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return true;
    };

    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, contact]
      }
    })
    return false;
  };
  
  handleDeleteContact = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id)
      }
    })
  };

  handleChangeFilter = (e) => {
    this.setState({ filter: e.target.value })
  };

  handleFilterContacts = () => {
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase().trim()))
  };
  
  render() {
    return (
      <div>
        <h1 className={css.phonebook__title}>Phonebook</h1>
        <ContactsForm addContact={this.handleAddContact} />
        <h2 className={css.phonebook__title}>Contacts</h2>
        <Filter value={this.state.filter} handleChange={this.handleChangeFilter} />
        <ContactsList contacts={this.handleFilterContacts()} deleteContact={this.handleDeleteContact} />
      </div>
    );
  }
};
