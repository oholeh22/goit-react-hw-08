import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from '../Pages/HomePage/HomePage';
import RegistrationPage from '../pages/RegistrationPage/Registration';
import LoginPage from '../Pages/LoginPage/Login';
import ContactsPage from '../Pages/ContactsPage/ContactsPage';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/operations';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector((state) => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Loading...</p>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute>
              <RegistrationPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
