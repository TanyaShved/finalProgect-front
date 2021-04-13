import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

const PublicRegisterRoute = ({
  children,
  restricted = false,
  redirectTo = '/login',
  ...routeProps
}) => {
  const isRegistered = useSelector(authSelectors.getIsRegistered);
  const shouldRedirect = isRegistered && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
};

PublicRegisterRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string,
};

export default PublicRegisterRoute;
