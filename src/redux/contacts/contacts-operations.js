import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  fetchAllContacts,
  addNewContact,
  deleteContactById
} from 'services/contacts-api-service';


export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, rejectWithValue) => {
    try {
      const contacts = await fetchAllContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { getState, rejectWithValue }) => {
    
    const state = getState();
    const { name } = newContact;

    const check = state.contacts.items.find(
      contact => contact.name === name
    );

    if (check) {
      alert('This contact is already in the list!');
      return rejectWithValue();
    }

    try {
      const contact = await addNewContact(newContact);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, rejectWithValue) => {
    try {
      await deleteContactById(contactId);
      return contactId;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
