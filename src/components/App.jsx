import React, { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks/useAuth';
import Register from 'page/Register';
import Login from 'page/Login';
import Home from 'page/Home';
import { Contacts } from 'page/Contacts';

// const HomePage = lazy(() => import('../page/Home'));
// const RegisterPage = lazy(() => import('../page/Register'));
// const LoginPage = lazy(() => import('../page/Login'));
// const ContactsPage = lazy(() => import('../page/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<HomePage />} />
    //     <Route
    //       path="/register"
    //       element={
    //         <RestrictedRoute
    //           redirectTo="contacts"
    //           component={<RegisterPage />}
    //         />
    //       }
    //     />
    //     <Route
    //       path="/login"
    //       element={
    //         <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
    //       }
    //     />
    //     <Route
    //       path="/contacts"
    //       element={
    //         <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
    //       }
    //     />
    //   </Route>
    // </Routes>
    // ====
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};
