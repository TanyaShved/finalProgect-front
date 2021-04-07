import { createSlice } from '@reduxjs/toolkit';
import testsOperations from './tests-operations';
import { authOperations } from '../auth';
import tests from '../../tests.json';

const initialState = {
  questions: tests,
  results: [],
};

const testsSlice = createSlice({
  name: 'tests',
  initialState,
  extraReducers: {
    [testsOperations.fetchTests.fulfilled](state, action) {
      state.questions = action.payload;
    },
    [testsOperations.postAnswers.fulfilled](state, action) {
      state.questions = [];
      state.payload = action.payload;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.questions = [];
      state.payload = [];
    },
  },
});

export default testsSlice.reducer;
