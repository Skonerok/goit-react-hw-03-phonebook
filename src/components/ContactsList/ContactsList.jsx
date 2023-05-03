import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

export function ContactsList({contacts, deleteContact}) {
  return (
      <ul className={css.phonebook__list}>
          {contacts.map(contact => {
              return (
                <li className={css.phonebook__item} key={contact.id}>
                  <span>{contact.name}</span>:
                  <span>{contact.number}</span>
                  <button className={css.phonebook__delete} onClick={() => deleteContact(contact.id)}>Delete</button>
                  </li>
                )
          })}
    </ul>
  )
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  })),
  deleteContact: PropTypes.func,
};