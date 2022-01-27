import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as contactsActions from './contacts-actions';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => {
    return payload;
  },
  [addContact.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },

  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [contactsActions.updateFilter]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const isAddingContact = createReducer(false, {
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.pending]: () => null,
  [fetchContacts.fulfilled]: () => null,
  [fetchContacts.rejected]: () => true,
});

export default combineReducers({
  items,
  filter,
  isLoading,
  isAddingContact,
  error,
});
