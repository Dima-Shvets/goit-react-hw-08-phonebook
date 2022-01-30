import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BallTriangle } from 'react-loader-spinner';

import { ContactForm } from 'components/ContactForm';
import {ContactList} from 'components/ContactList';
import { Filter } from 'components/Filter';

import { contactsOperations, contactsSelectors } from 'redux/contacts';

export default function ContactsView() {
    const isLoading = useSelector(contactsSelectors.getIsLoading);
  const error = useSelector(contactsSelectors.getError);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchContacts = () => dispatch(contactsOperations.fetchContacts());
    fetchContacts();
  }, [dispatch]);

    return (
        <section>
            <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading ? 
        <BallTriangle
          heigth="150"
          width="150"
          color="grey"
          ariaLabel="loading-indicator"
          /> 
          : <ContactList/>
      }
      {error && <p>404. Unable to load the contacts</p>}
      
        </section>
    )
}