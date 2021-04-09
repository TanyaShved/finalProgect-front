import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Container from './components/Container';
import Loader from './components/Loader';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import TestView from './views/TestView';
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

// import PrivateRoute from 'components/PrivateRoute';
// import PublicRoute from 'components/PublicRoute';

function App() {
  return (
    <>
      <AppBar />
      {/* <Container>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/" exact> */}

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/auth" exact>
            <Container>
              <AuthView />
            </Container>
          </Route>

          <Route path="/" exact>
            <Container>
              <MainPage />
            </Container>
          </Route>

          <Route path="/test">
            <Container>
              <TestView />
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
