import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import Container from './components/Container';
import Loader from './components/Loader';
import PublicGeneralRoute from 'components/Routes/PublicGeneralRoute';
import PublicRegisterRoute from 'components/Routes/PublicRegisterRoute';
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
  const [testTitle, setTestTitle] = useState({
    firstPart: '[QA technical',
    secondPart: 'training_]',
  });
  const dispatch = useDispatch()
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser)

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>   
      {isFetchingCurrentUser
        ? <Loader />
        : <>
          <AppBar />
          
            <Switch>
              <Suspense fallback={<Loader />}>
                <PublicGeneralRoute path="/login" redirectTo="/" restricted>
                  <Container>
                    <LoginView />
                  </Container>
                </PublicGeneralRoute>
            
                <PublicRegisterRoute path="/register" restricted>
                  <Container>
                    <RegisterView />
                  </Container>
                </PublicRegisterRoute>
            
                <PrivateRoute path="/" exact>
                  <Container>
                    <MainPage setTestTitle={setTestTitle} />
                  </Container>
                </PrivateRoute>
                
                <PrivateRoute path="/test">
                  <Container>
                    <TestView testTitle={testTitle} />
                  </Container>
                </PrivateRoute>
            
                <PrivateRoute path="/useful-info">
                  {/* <Container> */}
                  <UsefulInfoView />
                  {/* </Container> */}
                </PrivateRoute>
                
                <PublicGeneralRoute path="/contacts">
                  <Container>
                    <ContactsPage />
                  </Container>
                </PublicGeneralRoute>
            
                <PrivateRoute path="/results">
                  <Container>
                    <ResultView />
                  </Container>
                </PrivateRoute>
                
                <Container>
                  <Route component={NotFoundView} />
                </Container>
              </Suspense>
            </Switch>
          <Footer />
        </>
      }
      <ToastContainer />
    </>
  );
}
export default App;
