import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://61ec45e3f3011500174d212a.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, rejectWithValue) => {
    try {
      const { data: contacts } = await axios.get('/contacts');
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, rejectWithValue) => {
    try {
      const { data: contact } = await axios.post('/contacts', newContact);
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
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
