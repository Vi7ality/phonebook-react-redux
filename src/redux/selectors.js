import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.data;

export const selectFilterQuery = state => state.filterQuery;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectStatusFilter = state => state.filters.status;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterQuery],
  (contacts, filterQuery) => {
    const normalizedFilterQuery = filterQuery.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilterQuery)
    );
  }
);
