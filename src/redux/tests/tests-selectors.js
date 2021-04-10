const getQuestions = state => state.tests.questions;
const getResults = state => state.tests.results;
const getTestUrl = state => state.tests.testUrl;

const selectors = {
  getQuestions,
  getResults,
  getTestUrl,
};
export default selectors;
