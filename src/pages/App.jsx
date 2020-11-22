import React, { useEffect } from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import { Global } from '@emotion/core';

import reset from './styles/Reset';

// import MainPage from './MainPage';

import TalentFormContainer from './TalentFormContainer';

import TalentFrontEndFormContainer from './TalentFrontEndFormContainer';

import TalentBackEndFormContainer from './TalentBackEndFormContainer';

function App() {
  return (
    <>
      <Switch>
        {/* <Route exact path="/" component={MainPage} /> */}
        <Route exact path="/" component={TalentFormContainer} />
        <Route path="/talent/FrontEnd" component={TalentFrontEndFormContainer} />
        <Route path="/talent/BackEnd" component={TalentBackEndFormContainer} />
      </Switch>
      <Global styles={reset} />
    </>
  );
}

export default App;
