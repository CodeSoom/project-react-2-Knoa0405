import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

import { auth } from '../services/firebase';

import { setUser } from '../redux/slice';

import { saveItem } from '../services/storage';

function LoginPage() {
  const dispatch = useDispatch();

  function authListener() {
    auth.onAuthStateChanged((userAuth) => {
      const { uid } = userAuth || { uid: '' };
      if (uid) {
        dispatch(setUser({ uid }));

        saveItem('user', uid);
      }
    });
  }

  useEffect(() => {
    authListener();
  }, []);

  return (
    <>
      <p>로그인</p>
      <LoginFormContainer />
    </>
  );
}

export default LoginPage;
