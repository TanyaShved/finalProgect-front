import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import AppBar from './components/AppBar';
import Container from './components/Container';
// import PrivateRoute from 'components/PrivateRoute';
// import PublicRoute from 'components/PublicRoute';

import Loader from './components/Loader';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Container>
      {/* <AppBar /> */}
      <Switch>
        <Suspense fallback={<Loader />}></Suspense>
      </Switch>
      <ToastContainer />
    </Container>
  );
}
export default App;
