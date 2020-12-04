import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import { Global } from '@emotion/core';

import reset from './styles/Reset';

import MainPage from './MainPage';

import UserInfoContainer from './UserInfoContainer';

import TalentFormContainer from './TalentFormContainer';

import CategoriesPage from './CategoriesPage';

import TalentProficiencyContainer from './TalentProficiencyContainer';

import TalentsContainer from './TalentsContainer';

import LogoContainer from '../components/LogoContainer';

import Header from './styles/Header';

import PageLayout from './styles/PageLayout';

function App() {
  return (
    <PageLayout>
      <Header>
        <LogoContainer />
      </Header>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/userInfo" component={UserInfoContainer} />
        <Route exact path="/talent/proficiency" component={TalentProficiencyContainer} />
        <Route path="/talents" component={TalentsContainer} />
        <Route exact path="/:talentOrPassion/:category" component={CategoriesPage} />
        <Route path="/:talentOrPassion" component={TalentFormContainer} />
      </Switch>
      <Global styles={reset} />
    </PageLayout>
  );
}

export default App;
