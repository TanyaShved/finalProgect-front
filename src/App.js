import React, { Suspense, lazy, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './components/Container';
import Loader from './components/Loader';
import PublicRoute from 'components/Routes/PublicRoute';
import PrivateRoute from 'components/Routes/PrivateRoute';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import UsefulInfoView from './views/UsefulInfoView';
import NotFoundView from './views/NotFoundView';

// const AuthPage = lazy(() =>
//   import('./views/AuthPage/AuthPage.jsx' /* webpackChunkName: "auth-page" */),
// );

const LoginView = lazy(() =>
  import(
    './views/LoginView/LoginView.jsx' /* webpackChunkName: "login-view" */
  ),
);

const RegisterView = lazy(() =>
  import(
    './views/RegisterView/RegisterView.jsx' /* webpackChunkName: "register-view" */
  ),
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

const ResultView = lazy(() =>
  import('./views/ResultsView' /* webpackChunkName: "results-page" */),
);

const TestView = lazy(() =>
  import('./views/TestView' /* webpackChunkName: "test-page" */),
);

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
          <PublicRoute path="/login" exact redirectTo="/" restricted>
            <Container>
              <LoginView />
            </Container>
          </PublicRoute>

          <PublicRoute path="/register" exact redirectTo="/" restricted>
            <Container>
              <RegisterView />
            </Container>
          </PublicRoute>

          <PrivateRoute path="/" redirectTo="/login" exact>
            <Container>
              <MainPage setTestTitle={setTestTitle} />
            </Container>
          </PrivateRoute>

          <PrivateRoute path="/test" redirectTo="/login">
            <Container>
              <TestView testTitle={testTitle} />
            </Container>
          </PrivateRoute>

          <PrivateRoute path="/useful-info" redirectTo="/login">
            {/* <Container> */}
            <UsefulInfoView />
            {/* </Container> */}
          </PrivateRoute>

          <PublicRoute path="/contacts">
            <Container>
              <ContactsPage />
            </Container>
          </PublicRoute>

          <PrivateRoute path="/results" redirectTo="/login">
            <Container>
              <ResultView />
            </Container>
          </PrivateRoute>

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
