import { createSlice } from '@reduxjs/toolkit';
import testsOperations from './tests-operations';
import { authOperations } from '../auth';
// import tests from '../../tests.json';

const initialState = {
  questions: [],
  results: [],
  testUrl: '',
  statistics: [],
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

    setTestUrl(state, { payload }) {
      state.testUrl = payload;
    },

    unsetTests(state) {
      state.questions = [];
    },
    unsetResults(state) {
      state.results = [];
    },
  },

  extraReducers: {
    [testsOperations.fetchTests.fulfilled](state, action) {
      state.questions = action.payload.data.test;
    },
    [testsOperations.postAnswers.fulfilled](state, action) {
      state.statistics = action.payload.data;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.questions = [];
      state.payload = {};
    },
  },
});

export const {
  addResult,
  unsetTests,
  unsetResults,
  setTestUrl,
} = testsSlice.actions;
export default testsSlice.reducer;
