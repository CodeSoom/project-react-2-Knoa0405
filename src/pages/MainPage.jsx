import React from 'react';

import styled from '@emotion/styled';

import LogoContainer from '../components/LogoContainer';

import Header from './styles/Header';

import TalentButtonContainer from '../components/TalentButtonContainer';

const MainPageLayout = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
});

function MainPage() {
  return (
    <MainPageLayout>
      <Header>
        <LogoContainer />
      </Header>
      <TalentButtonContainer />
    </MainPageLayout>
  );
}

export default MainPage;
