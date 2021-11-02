import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { changeFilter } from "./contacts-actions";
import {
  fetchContactsAction,
  addContactAction,
  deleteContactAction,
} from "./contacts-operations(axios)";

const entities = createReducer([], {
  [fetchContactsAction.fulfilled]: (_, { payload }) => payload.data,
  [addContactAction.fulfilled]: (state, { payload }) => [
    ...state,
    payload.data,
  ],
  [deleteContactAction.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const isLoading = createReducer(false, {
  [fetchContactsAction.pending]: () => true,
  [fetchContactsAction.fulfilled]: () => false,
  [fetchContactsAction.rejected]: () => false,
  [deleteContactAction.fulfilled]: () => false,
  [deleteContactAction.pending]: () => true,
  [deleteContactAction.rejected]: () => false,
  [addContactAction.fulfilled]: () => false,
  [addContactAction.pending]: () => true,
  [addContactAction.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContactsAction.rejected]: (_, { payload }) => payload,
  [fetchContactsAction.pending]: () => null,
  [addContactAction.pending]: () => null,
  [addContactAction.rejected]: (_, { payload }) => payload,
  [deleteContactAction.pending]: () => null,
  [deleteContactAction.rejected]: (_, { payload }) => payload,
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ entities, isLoading, error, filter });
