import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import {
  setLoginFields,
  requestSignUp,
  requestSignIn,
} from '../redux/slice';

function LoginFormContainer() {
  const dispatch = useDispatch();

  const { loginFields, loginError, user } = useSelector((state) => ({
    loginFields: state.loginFields,
    loginError: state.loginError,
    user: state.user,
  }));

  function handleChange(e) {
    const { name, value } = e.target;

    dispatch(setLoginFields({ name, value }));
  }

  function handleSignIn() {
    dispatch(requestSignIn());
  }

  function handleSignUp() {
    dispatch(requestSignUp());
  }

  if (user) {
    return (
      <p>LogOut</p>
    );
  }

  return (
    <LoginForm
      fields={loginFields}
      onChange={handleChange}
      handleSignIn={handleSignIn}
      handleSignUp={handleSignUp}
      error={loginError}
      user={user}
    />
  );
}

export default LoginFormContainer;
