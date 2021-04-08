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
import ResultView from './views/ResultsView';
import NotFoundView from './views/NotFoundView';

const AuthPage = lazy(() =>
  import('./views/AuthPage/AuthPage.jsx' /* webpackChunkName: "auth-page" */),
);

const MainPage = lazy(() =>
  import(
    '../src/views/HomeViev/MainPage.jsx' /* webpackChunkName: "main-page" */
  ),
);

const ContactsPage = lazy(() =>
  import(
    '../src/views/ContactsView/ContactsPage.jsx' /* webpackChunkName: "contacts-page" */
  ),
);

// import PrivateRoute from 'components/PrivateRoute';
// import PublicRoute from 'components/PublicRoute';

function App() {
  return (
    <>
      <Container>
        <AppBar />
      </Container>

      <Suspense fallback={<Loader />}>
        <Switch>
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

          <Route path="/contacts">
            <Container>
              <ContactsPage />
            </Container>
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
