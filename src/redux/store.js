import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './reducer';

const store = configureStore({
  contacts: contactsReducer,
  filter: filterReducer,
});
