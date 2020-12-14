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

import { loadItem, clearItem } from '../services/storage';

function LoginFormContainer() {
  const dispatch = useDispatch();

  const { loginFields, loginError } = useSelector((state) => ({
    loginFields: state.loginFields,
    loginError: state.loginError,
  }));

  const user = loadItem('user');

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
    auth.signOut();

    dispatch(setUser({ uid: '' }));

    clearItem('user');
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
