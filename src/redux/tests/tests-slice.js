import { createSlice } from "@reduxjs/toolkit";
import testsOperations from "./tests-operations";
import { authOperations } from "../auth";

const initialState = {
  tests: [],
  results: [],
};

const testsSlice = createSlice({
  name: "tests",
  initialState,
  extraReducers: {
    [testsOperations.fetchTests.fulfilled](state, action) {
      state.tests = action.payload;
    },
    [testsOperations.postAnswers.fulfilled](state, action) {
      state.tests = [];
      state.payload = action.payload;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.tests = [];
      state.payload = [];
    },
  },
});

export default testsSlice.reducer;
