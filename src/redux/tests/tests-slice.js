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

  reducers: {
    addResult(state, { payload }) {
      const index = state.results.findIndex(
        result => result.questionId === payload.questionId,
      );

      if (index !== -1) {
        state.results[index].answer = payload.answer;
      } else {
        state.results.push(payload);
      }
    },
  },

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

export const { addResult } = testsSlice.actions;
export default testsSlice.reducer;
