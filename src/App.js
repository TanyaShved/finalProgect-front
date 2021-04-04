import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Container from './components/Container';
import Loader from './components/Loader';
import 'react-toastify/dist/ReactToastify.css';

// import AppBar from './components/AppBar';
const MainPage = lazy(() =>
  import(
    '../src/views/HomeViev/MainPage.jsx' /* webpackChunkName: "main-page" */
  ),
);
// import PrivateRoute from 'components/PrivateRoute';
// import PublicRoute from 'components/PublicRoute';

function App() {
  return (
    <Container>
      {/* <AppBar /> */}
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
        </Switch>
      </Suspense>

      <ToastContainer />
    </Container>
  );
}
export default App;
