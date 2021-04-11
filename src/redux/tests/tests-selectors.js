const getQuestions = state => state.tests.questions;
const getResults = state => state.tests.results;
const getTestUrl = state => state.tests.testUrl;
const getTestStatistics = state => state.tests.statistics;

const selectors = {
  getQuestions,
  getResults,
  getTestUrl,
  getTestStatistics,
};
export default selectors;
