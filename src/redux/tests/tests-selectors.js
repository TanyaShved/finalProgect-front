const getQuestions = state => state.tests.questions;
const getResults = state => state.tests.results;
const getTestUrl = state => state.tests.testUrl;
const getTestStatistics = state => state.tests.statistics;
const getQuesNumb = state => state.tests.quesNumb;

const selectors = {
  getQuestions,
  getResults,
  getTestUrl,
  getTestStatistics,
  getQuesNumb,
};
export default selectors;
