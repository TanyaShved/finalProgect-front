const getQuestions = state => state.tests.questions;
const getResults = state => state.tests.results;

const selectors = {
  getQuestions,
  getResults,
};
export default selectors;
