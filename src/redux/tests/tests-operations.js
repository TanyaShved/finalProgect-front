import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchTests = createAsyncThunk(
  "questions/fetchTests",
  async (testUrl, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/test/${testUrl}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const postAnswers = createAsyncThunk(
  "questions/postAnswers",
  async (testUrl, answers, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/test/${testUrl}`, answers);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const operations = {
  fetchTests,
  postAnswers,
};
export default operations;
