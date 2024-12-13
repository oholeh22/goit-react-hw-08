import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isRefreshing = useSelector((state) => state.auth.isRefreshing);
  return isRefreshing ? <p>Loading...</p> : isLoggedIn ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
