import React, { useEffect } from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import { Global } from '@emotion/core';

import { useSelector } from 'react-redux';

import reset from './styles/Reset';

import LoginPage from './LoginPage';

import MainPage from './MainPage';

import UserInfoContainer from './UserInfoContainer';

import TalentFormContainer from './TalentFormContainer';

import CategoriesPage from './CategoriesPage';

import TalentProficiencyContainer from './TalentProficiencyContainer';

import TalentsContainer from './TalentsContainer';

import LogoContainer from '../components/LogoContainer';

import Header from './styles/Header';

import PageLayout from './styles/PageLayout';

import AuthRoute from '../components/AuthRoute';

function App() {
  const { user } = useSelector((state) => ({
    user: state.user,
  }));

  return (
    <PageLayout>
      <Header>
        <LogoContainer />
      </Header>
      <Switch>
        <Route user={user} exact path="/" component={LoginPage} />
        <AuthRoute user={user} path="/main" component={MainPage} />
        <AuthRoute user={user} path="/userInfo" component={UserInfoContainer} />
        <AuthRoute user={user} path="/talent/proficiency" component={TalentProficiencyContainer} />
        <AuthRoute user={user} path="/talents" component={TalentsContainer} />
        <AuthRoute user={user} path="/:talentOrPassion/:category" component={CategoriesPage} />
        <AuthRoute user={user} path="/:talentOrPassion" component={TalentFormContainer} />
      </Switch>
      <Global styles={reset} />
    </PageLayout>
  );
}

export default App;
