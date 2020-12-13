import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import LoginForm from './LoginForm';

import {
  setLoginFields,
  requestSignUp,
  requestSignIn,
  setUser,
} from '../redux/slice';

import { auth } from '../services/firebase';

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

  function handleLogOut() {
    dispatch(setUser(''));
    auth.signOut();
  }

  if (user) {
    return (
      <>
        <button type="button" onClick={handleLogOut}>LogOut</button>
        <Link to="/main">메인으로</Link>
      </>
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
