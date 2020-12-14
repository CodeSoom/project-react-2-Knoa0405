import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import { Global } from '@emotion/core';

import { useDispatch } from 'react-redux';

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

import { loadItem } from '../services/storage';

import { setUser } from '../redux/slice';

function App() {
  const dispatch = useDispatch();

  const user = loadItem('user');

  if (user) {
    dispatch(setUser({ uid: user }));
  }

  return (
    <PageLayout>
      <Header>
        <LogoContainer />
      </Header>
      <Switch>
        <Route exact path="/" component={LoginPage} />
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
