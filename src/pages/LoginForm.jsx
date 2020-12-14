import React from 'react';

function LoginForm({
  fields, onChange, handleSignIn, handleSignUp, error,
}) {
  const { username, password } = fields;

  const { code = '아직없음', message = '아직없음' } = error;

  return (
    <>
      <form action="" method="POST">
        <label htmlFor="login-id">ID</label>
        <input
          id="login-id"
          type="email"
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
          onClick={handleSignIn}
        >
          Sign In
        </button>
        <button
          type="button"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </form>

      {code !== '' || message !== ''
        ? (
          <>
            <p>{`에러코드 : ${code}`}</p>
            <p>{`에러 메세지 : ${message}`}</p>
          </>
        )
        : ''}
    </>
  );
}

export default LoginForm;
