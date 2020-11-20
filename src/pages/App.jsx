import React from 'react';

import { Global } from '@emotion/core';

import reset from './styles/Reset';

import MainPage from './MainPage';

function App() {
  return (
    <>
      <MainPage />
      <Global styles={reset} />
    </>
  );
}

export default App;
