import { createAction } from '@reduxjs/toolkit';
export const addContact = createAction('contacts/AddContact', contact => {
  return {
    payload: {
      id: contact.id,
      name: contact.name,
      number: contact.number,
    },
  };
});

export const deleteContact = createAction('contacts/DeleteContact');

export const setFilter = createAction('filterQuery/SetFilter');
