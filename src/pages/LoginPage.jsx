import React, { useEffect } from 'react';

import { Redirect } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

import { auth } from '../services/firebase';

import { setUser } from '../redux/slice';

function LoginPage({ user, location }) {
  const dispatch = useDispatch();

  const { from } = location?.state || { from: { pathname: '/' } };

  function authListener() {
    auth.onAuthStateChanged((userAuth) => {
      const { uid } = userAuth || { uid: '' };
      if (uid) {
        dispatch(setUser({ uid }));
      }
    });
  }

  useEffect(() => {
    authListener();
  }, []);

  if (user) return <Redirect to={from} />;

  return (
    <>
      <p>로그인</p>
      <LoginFormContainer />
    </>
  );
}

export default LoginPage;
