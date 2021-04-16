import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Switch, useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import Container from './components/Container';
import Loader from './components/Loader';
import PublicRoute from 'components/Routes/PublicRoute';
import PrivateRoute from 'components/Routes/PrivateRoute';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import UsefulInfoView from './views/UsefulInfoView'; //Уточнить, почему делали не через динамические импорты
import NotFoundView from './views/NotFoundView'; //Уточнить, почему делали не через динамические импорты

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
const GoogleView = lazy(() =>
  import(
    './views/GoogleView/GoogleView.jsx' /* webpackChunkName: "google-view" */
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

const App = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [currentUrl] = useState(() => location.pathname);
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );

  useEffect(() => {
    const params = new URL(document.location).searchParams;
    const token = params.get('token');
    window.localStorage.setItem('token', JSON.stringify(token));
  }, []);

  useEffect(() => {
    history.push(currentUrl);
    dispatch(authOperations.fetchCurrentUser());
  }, [currentUrl, dispatch, history]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <>
          <AppBar />

          <Suspense fallback={<Loader />}>
            <Switch>
              <PublicRoute path="/auth/google" restricted>
                <Container>
                  <GoogleView />
                </Container>
              </PublicRoute>

              <PublicRoute path="/login" redirectTo="/" restricted>
                <Container>
                  <LoginView />
                </Container>
              </PublicRoute>

              <PublicRoute path="/register" restricted>
                <Container>
                  <RegisterView />
                </Container>
              </PublicRoute>

              <PrivateRoute path="/" exact>
                <Container>
                  <MainPage />
                </Container>
              </PrivateRoute>

              <PrivateRoute path="/test">
                <Container>
                  <TestView />
                </Container>
              </PrivateRoute>

              <PrivateRoute path="/useful-info">
                {/* <Container> */}
                <UsefulInfoView />
                {/* </Container> */}
              </PrivateRoute>

              <PublicRoute path="/contacts">
                <Container>
                  <ContactsPage />
                </Container>
              </PublicRoute>

              <PrivateRoute path="/results">
                <Container>
                  <ResultView />
                </Container>
              </PrivateRoute>

              <Container>
                <PublicRoute component={NotFoundView} />
              </Container>
            </Switch>
          </Suspense>
          <Footer />
        </>
      )}
      <ToastContainer />
    </>
  );
};
export default App;
