import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import { Global } from '@emotion/core';

import reset from './styles/Reset';

import MainPage from './MainPage';

import TalentInputContainer from './TalentInputContainer';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/talent" component={TalentInputContainer} />
      </Switch>
      <Global styles={reset} />
    </>
  );
}

export default App;
