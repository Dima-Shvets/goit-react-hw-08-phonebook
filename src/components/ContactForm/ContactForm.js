import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './ContactForm.module.scss';

import { Oval } from 'react-loader-spinner';
import { nanoid } from 'nanoid';

import { contactsOperations, contactsSelectors } from 'redux/contacts';

const nameInputId = nanoid();
const numberInputId = nanoid();

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactsSelectors.getContacts);
  const isAddingContact = useSelector(contactsSelectors.getIsAddingContact);

  const dispatch = useDispatch();

  const addContact = contact => {
    const { name } = contact;
    const check = contacts.find(contact => contact.name === name);

    if (check) {
      alert('This contact is already in the list!');
      return;
    }

    dispatch(contactsOperations.addContact(contact));
  };

  const inputHandler = e => {
    const { value, name } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const submitHandler = e => {
    e.preventDefault();

    addContact({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s['contact-form']} onSubmit={submitHandler}>
      <label htmlFor={nameInputId} className={s['name-label']}>
        Name
      </label>
      <input
        id={nameInputId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={inputHandler}
      />
      <label htmlFor={numberInputId} className={s['number-label']}>
        Number
      </label>
      <input
        id={numberInputId}
        className={s['number-input']}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={inputHandler}
      />
      <button className={s['btn']} type="submit">
        Add contact
        {isAddingContact && (
          <Oval
            ariaLabel="loading-indicator"
            height={12}
            width={12}
            strokeWidth={5}
            color="black"
            secondaryColor="grey"
          />
        )}
      </button>
    </form>
  );
}
