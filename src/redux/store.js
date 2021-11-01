import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { contactsApi } from "./contacts/contacts-slice";
// import { userAuth } from "./auth/auth-operations";
import storage from "redux-persist/lib/storage";
import authSlice from "./auth/auth-slice";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  contactsApi.middleware,
];

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    userAuth: persistReducer(authPersistConfig, authSlice),
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
