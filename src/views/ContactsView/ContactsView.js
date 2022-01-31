import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Oval } from 'react-loader-spinner';

import { ContactForm } from 'components/ContactForm';
import {ContactList} from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Section } from 'components/Section';

import s from './ContactsView.module.scss';

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
      <Section>
      <ContactForm />
      <h1 className={s.title}>Contacts</h1>
      <Filter />
      {isLoading ? 
          <p>Loading the contacts</p>
          : <ContactList/>
      }
      {error && <p>404. Unable to load the contacts</p>}
        </Section>
    )
}