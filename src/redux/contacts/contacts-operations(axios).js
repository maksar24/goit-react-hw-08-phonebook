import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContactsAction = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    try {
      return await axios.get("/contacts");
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const addContactAction = createAsyncThunk(
  "contacts/addContacts",
  async (contact) => {
    try {
      return await axios.post("/contacts", contact);
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const deleteContactAction = createAsyncThunk(
  "contacts/deleteContacts",
  async (id) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      console.log(error.message);
    }
  }
);
