import React, { Suspense, lazy, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Container from './components/Container';
import Loader from './components/Loader';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import UsefulInfoView from './views/UsefulInfoView';
import NotFoundView from './views/NotFoundView';

const AuthView = lazy(() =>
  import('./views/AuthView/AuthView.jsx' /* webpackChunkName: "auth-view" */),
);
const MainPage = lazy(() =>
  import(
    '../src/views/HomeViev/MainPage.jsx' /* webpackChunkName: "main-page" */
  ),
);
const ResultView = lazy(() =>
  import('./views/ResultsView' /* webpackChunkName: "results-page" */),
);
const TestView = lazy(() =>
  import('./views/TestView' /* webpackChunkName: "test-page" */),
);

// import PrivateRoute from 'components/PrivateRoute';
// import PublicRoute from 'components/PublicRoute';

function App() {
  const [testTitle, setTestTitle] = useState({
    firstPart: '[QA technical',
    secondPart: 'training_]',
  });

  return (
    <>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/auth" exact>
            <Container>
              <AuthView />
            </Container>
          </Route>

          <Route path="/" exact>
            <Container>
              <MainPage setTestTitle={setTestTitle} />
            </Container>
          </Route>

          <Route path="/test">
            <Container>
              <TestView testTitle={testTitle} />
            </Container>
          </Route>

          <Route path="/useful-info">
            <UsefulInfoView />
          </Route>

          <Route path="/results" exact>
            <Container>
              <ResultView />
            </Container>
          </Route>

          <Container>
            <Route component={NotFoundView} />
          </Container>
        </Switch>
      </Suspense>

      <ToastContainer />
      <Footer />
    </>
  );
}
export default App;
