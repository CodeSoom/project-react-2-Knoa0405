import React from 'react';

function LoginForm({
  fields, onChange, onSubmit,
}) {
  const { username, password } = fields;

  return (
    <form action="" method="POST">
      <label htmlFor="login-id">ID</label>
      <input
        id="login-id"
        type="text"
        name="username"
        value={username}
        onChange={onChange}
      />
      <label htmlFor="login-pwd">PASSWORD</label>
      <input
        id="login-pwd"
        type="password"
        name="password"
        value={password}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={onSubmit}
      >
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;
