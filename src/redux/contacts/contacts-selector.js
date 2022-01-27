import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getIsLoading = state => state.contacts.isLoading;
export const getIsAddingContact = state => state.contacts.isAddingContact;
export const getError = state => state.contacts.error;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter),
    );
  },
);

// export const getFilteredContacts = state => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLocaleLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLocaleLowerCase().includes(normalizedFilter),
//   );
// };
