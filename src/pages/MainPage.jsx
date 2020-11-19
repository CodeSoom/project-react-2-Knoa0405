import React from 'react';

import styled from '@emotion/styled';

import LogoContainer from '../components/LogoContainer';

const Header = styled.header({
  height: '100px',
});

function MainPage() {
  return (
    <>
      <Header>
        <p>Hello</p>
        <LogoContainer />
      </Header>
    </>
  );
}

export default MainPage;
