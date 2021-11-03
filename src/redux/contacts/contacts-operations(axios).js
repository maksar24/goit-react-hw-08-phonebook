import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContactsAction = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      return await axios.get("/contacts");
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

export const addContactAction = createAsyncThunk(
  "contacts/addContacts",
  async (contact, { rejectWithValue }) => {
    try {
      return await axios.post("/contacts", contact);
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

export const deleteContactAction = createAsyncThunk(
  "contacts/deleteContacts",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);
