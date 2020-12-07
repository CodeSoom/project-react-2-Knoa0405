import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import {
  setLoginFields,
  requestLogin,
} from '../redux/slice';

function LoginFormContainer() {
  const dispatch = useDispatch();

  const { loginFields } = useSelector((state) => ({
    loginFields: state.loginFields,
  }));

  function handleChange(e) {
    const { name, value } = e.target;
    dispatch(setLoginFields({ name, value }));
  }

  function handleSubmit() {
    dispatch(requestLogin());
  }

  return (
    <LoginForm
      fields={loginFields}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}

export default LoginFormContainer;
