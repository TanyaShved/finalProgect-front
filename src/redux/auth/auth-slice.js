import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
} = authOperations;

const initialState = {
  user: {
    name: null,
    email: null
  },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [register.fulfilled](state, { payload }) {
      state.user.name = payload.data.name;
      state.user.email = payload.data.email;
      state.token = payload.data.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [register.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [logIn.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [logIn.fulfilled](state, { payload }) {
      state.user.name = payload.data.name;
      state.token = payload.data.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [logIn.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [logOut.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [logOut.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    },
    [logOut.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [fetchCurrentUser.pending](state, _) {
      state.isFetchingCurrentUser = true;
      state.error = null;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
      state.error = null;
    },
    [fetchCurrentUser.rejected](state, { payload }) {
      state.isFetchingCurrentUser = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
