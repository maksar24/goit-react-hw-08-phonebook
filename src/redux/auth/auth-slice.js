import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, signIn } from "./auth-operation(axios)";

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
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = initialState;
        state.token = initialState.token;
        state.isLoggedIn = false;
      });
  },
});

export default authSlice.reducer;

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   extraReducers: (builder) => {
//     builder
//       .addMatcher(
//         userAuth.endpoints.createUser.matchFulfilled,
//         (state, { payload }) => {
//           state.token = payload.token;
//           state.user = payload.user;
//           state.isLoggedIn = true;
//         }
//       )
//       .addMatcher(
//         userAuth.endpoints.loginUser.matchFulfilled,
//         (state, { payload }) => {
//           state.token = payload.token;
//           state.user = payload.user;
//           state.isLoggedIn = true;
//         }
//       )
//       .addMatcher(
//         userAuth.endpoints.logoutUser.matchFulfilled,
//         (state) => {
//             state.user = initialState;
//             state.token = initialState.token;
//             state.isLoggedIn = false;
//         }
//       );
//   },
// });
