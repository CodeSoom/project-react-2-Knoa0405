import React from 'react';

import styled from '@emotion/styled';

import LogoSrc from '../assets/images/logo.png';

const Header = styled.header({
  height: '100px',
});

const Logo = styled.img({
  width: '50px',
  height: '50px',
});

function MainPage() {
  return (
    <>
      <Header>
        <p>Hello</p>
        <Logo src={LogoSrc} />
      </Header>
    </>
  );
}

export default MainPage;
