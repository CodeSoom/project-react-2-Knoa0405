import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import {
  loadManttoCategories,
} from '../redux/slice';

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

export default function TalentsContainer() {
  const dispatch = useDispatch();

  const { CategoriesIsLoading, manttoCategories = [] } = useSelector((state) => ({
    manttoCategories: state.manttoCategories,
    CategoriesIsLoading: state.CategoriesIsLoading,
  }));

  useEffect(() => {
    dispatch(loadManttoCategories());
  }, []);

  if (CategoriesIsLoading) {
    return (
      <p>로딩중..!</p>
    );
  }

  if (manttoCategories === null) {
    return (
      <p>잠시 기달</p>
    );
  }

  return (
    <>
      <ManttoTitle>Mantto Talents</ManttoTitle>
      <ManttoCategories>
        {Object.entries(manttoCategories).map(([key, {
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
