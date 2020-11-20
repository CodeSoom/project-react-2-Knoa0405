import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import { Global } from '@emotion/core';

import reset from './styles/Reset';

// import MainPage from './MainPage';

import TalentInputContainer from './TalentInputContainer';

import TalentFrontEndInputContainer from './TalentFrontEndInputContainer';

import TalentBackEndInputContainer from './TalentBackEndInputContainer';

function App() {
  return (
    <>
      <Switch>
        {/* <Route exact path="/" component={MainPage} /> */}
        <Route exact path="/" component={TalentInputContainer} />
        <Route path="/talent/FrontEnd" component={TalentFrontEndInputContainer} />
        <Route path="/talent/BackEnd" component={TalentBackEndInputContainer} />
      </Switch>
      <Global styles={reset} />
    </>
  );
}

export default App;
