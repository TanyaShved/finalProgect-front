import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchTests = createAsyncThunk(
  'questions/fetchTests',
  async (testUrl, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/test/${testUrl}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const postAnswers = createAsyncThunk(
  'questions/postAnswers',
  async ({ testUrl, results }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/test/result-${testUrl}`, results);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const operations = {
  fetchTests,
  postAnswers,
};
export default operations;
