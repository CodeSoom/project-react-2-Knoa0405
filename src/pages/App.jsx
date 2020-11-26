import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import { Global } from '@emotion/core';

import reset from './styles/Reset';

import MainPage from './MainPage';

import TalentFormContainer from './TalentFormContainer';

import TalentFrontEndFormContainer from './TalentFrontEndFormContainer';

import TalentBackEndFormContainer from './TalentBackEndFormContainer';

import TalentProficiencyContainer from './TalentProficiencyContainer';

import TalentsContainer from './TalentsContainer';
// TODO : 1. loadmanttoCategories 내용 나오도록 정리 ( talentsContainer)
//        2. Json Server 에 create Category 가능하도록 구현
//        3. 1,2 끝나면 꾸며주기
//        4. 프로필 사진 or Avartar 올리기 가능?
//        5. mantto list 클릭하면 상세 페이지로 이동. ( 이메일 카카오톡 ID 등 표시 )
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/talent" component={TalentFormContainer} />
        <Route path="/talent/FrontEnd" component={TalentFrontEndFormContainer} />
        <Route path="/talent/BackEnd" component={TalentBackEndFormContainer} />
        <Route path="/talent/proficiency" component={TalentProficiencyContainer} />
        <Route path="/talents" component={TalentsContainer} />
      </Switch>
      <Global styles={reset} />
    </>
  );
}

export default App;
