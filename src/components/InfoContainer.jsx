import React from 'react';

import styled from '@emotion/styled';

import ProfileImage from '../assets/images/profile.png';

import ManttoProfileContainer from './ManttoProfileContainer';

import TalentAndPassionContainer from './TalentAndPassionContainer';

const ManttoInfoContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginBottom: '0.5rem',
  padding: '0.5rem',
  border: '1px solid #000',
  borderRadius: '10px',
  backgroundColor: '#f6f6f8',
});

const ManttoInfo = styled.div({
  display: 'flex',
  alignItems: 'center',
  padding: '0.5rem',
  '& p': {
    fontWeight: '700',
  },
});

const ManttoProfileImage = styled.img({
  width: '50px',
  height: '50px',
  margin: '20px',
});

export default function InfoContainer({
  nickname, talent, talentToLearn, email, kakaoID,
}) {
  return (
    <ManttoInfoContainer>
      <ManttoInfo>
        <ManttoProfileImage
          src={ProfileImage}
        />
        <ManttoProfileContainer
          nickname={nickname}
          email={email}
          kakaoID={kakaoID}
        />
      </ManttoInfo>
      <TalentAndPassionContainer
        talent={talent}
        talentToLearn={talentToLearn}
      />
    </ManttoInfoContainer>
  );
}
