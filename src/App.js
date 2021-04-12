import React, { Suspense, lazy, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './components/Container';
import Loader from './components/Loader';
import PublicRoute from 'components/Routes/PublicRoute';
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

// import PrivateRoute from 'components/PrivateRoute';

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

          <PublicRoute path="/register" exact restricted>
            <Container>
              <RegisterView />
            </Container>
          </PublicRoute>

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
            {/* <Container> */}
            <UsefulInfoView />
            {/* </Container> */}
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
