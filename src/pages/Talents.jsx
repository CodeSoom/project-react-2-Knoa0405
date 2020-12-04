import React from 'react';

import styled from '@emotion/styled';

import InfoContainer from '../components/InfoContainer';

const ManttoTitle = styled.h1({
  fontSize: '30px',
  fontWeight: '700',
});

const ManttoCategories = styled.ul({
  marginTop: '2rem',
});

const ManttoCategory = styled.li({
  listStyleType: 'none',
});

export default function Talents({ isLoading, categories }) {
  if (isLoading) {
    return (
      <p>로딩중..!</p>
    );
  }

  if (categories === null) {
    return (
      <p>만또가 없습니다.</p>
    );
  }

  return (
    <>
      <ManttoTitle>Mantto Talents</ManttoTitle>
      <ManttoCategories>
        {categories.map(([key, {
          nickname, talent, talentToLearn, email, kakaoID,
        }]) => (
          <ManttoCategory key={key}>
            <InfoContainer
              nickname={nickname}
              talent={talent}
              talentToLearn={talentToLearn}
              email={email}
              kakaoID={kakaoID}
            />
          </ManttoCategory>
        ))}
      </ManttoCategories>
    </>
  );
}
