import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions";

export const contactReducer = createReducer([], {
  [actions.fetchContactsSuccess]: (state, action) => action.payload,

  [actions.addContactSuccess]: (state, action) => [...state, action.payload],

  [actions.removeContactSuccess]: (state, action) =>
    state.filter((el) => el.id !== action.payload),
});

export const loading = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
});
