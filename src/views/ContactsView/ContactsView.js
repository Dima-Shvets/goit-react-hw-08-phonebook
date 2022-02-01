import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactForm } from 'components/ContactForm';
import {ContactList} from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Section } from 'components/Section';

import s from './ContactsView.module.scss';

import { contactsOperations, contactsSelectors } from 'redux/contacts';

import Alert from '@mui/material/Alert';

export default function ContactsView() {
    const isLoading = useSelector(contactsSelectors.getIsLoading);
  const error = useSelector(contactsSelectors.getError);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchContacts = () => dispatch(contactsOperations.fetchContacts());
    fetchContacts();
  }, [dispatch]);

    return (
      <Section>
      <ContactForm />
      <h1 className={s.title}>Contacts</h1>
      <Filter />
      {isLoading ? 
          <p>Loading the contacts</p>
          : <ContactList/>
      }
        {error && <Alert severity="error">404. Server does not respond</Alert>}
        </Section>
    )
}