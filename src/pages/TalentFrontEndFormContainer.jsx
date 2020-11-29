import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import NextButtonContainer from '../components/NextButtonContainer';

import {
  selectCategory,
} from '../redux/slice';

import TalentFrontEndForm from './TalentFrontEndForm';

import Title from '../components/styles/Title';

function TalentFrontEndFormContainer() {
  const dispatch = useDispatch();

  const { frontEndCategories } = useSelector((state) => ({
    frontEndCategories: state.frontEndCategories,
  }));

  function handleClick({ category }) {
    dispatch(selectCategory(category));
  }

  return (
    <>
      <Title>프론트엔드 항목을 고르세요</Title>
      <TalentFrontEndForm
        frontEndCategories={frontEndCategories}
        onClick={handleClick}
      />
      <div>
        <NextButtonContainer link="talent/proficiency" />
      </div>
    </>
  );
}

export default TalentFrontEndFormContainer;
