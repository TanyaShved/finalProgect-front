import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../constants";

axios.defaults.baseURL = baseURL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/signup', userData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const logIn = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/signin', userData);
      token.set(data.data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = axios.post('/auth/logout');
      token.unset();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.status);
    }
  },
);

const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, { getState, rejectWithValue }) => {
    const persistedToken = getState().auth.token;
    if (persistedToken === null) {
      return rejectWithValue(null);
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/auth/userinfo');
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.status);
    }
  },
);

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};
export default authOperations;
