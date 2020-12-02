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

import CategoriesFormContainer from './CategoriesFormContainer';

import TalentProficiencyContainer from './TalentProficiencyContainer';

import TalentsContainer from './TalentsContainer';

import LogoContainer from '../components/LogoContainer';

import Header from './styles/Header';

import PageLayout from './styles/PageLayout';
//        2. Json Server 에 create Category 가능하도록 구현
//        4. 프로필 사진 or Avartar 올리기 가능?
//        5. mantto list 클릭하면 상세 페이지로 이동. ( 이메일 카카오톡 ID 등 표시 )

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
        <Route exact path="/:talentOrPassion/:categoryUrl" component={CategoriesFormContainer} />
        <Route path="/:talentOrPassion" component={TalentFormContainer} />
      </Switch>
      <Global styles={reset} />
    </PageLayout>
  );
}

export default App;
