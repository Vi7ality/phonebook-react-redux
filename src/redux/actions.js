import { createAction } from '@reduxjs/toolkit';
export const addContact = createAction('contacts/AddContact', contact => {
  return {
    payload: {
      contact,
      id: contact.id,
    },
  };
});

export const deleteContact = createAction('contacts/AddContact');

export const setFilter = createAction('filter/SetFilter');
