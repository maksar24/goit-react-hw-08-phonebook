import { createSlice } from "@reduxjs/toolkit";
import { userAuth } from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addMatcher(
        userAuth.endpoints.createUser.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token;
          state.user = payload.user;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        userAuth.endpoints.loginUser.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token;
          state.user = payload.user;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        userAuth.endpoints.logoutUser.matchFulfilled,
        (state, action) => {
          state.user = { name: null, email: null };
          state.token = null;
          state.isLoggedIn = false;
        }
      );
  },
});

export default authSlice;
