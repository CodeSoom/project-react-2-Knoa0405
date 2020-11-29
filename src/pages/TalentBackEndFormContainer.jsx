import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import NextButtonContainer from '../components/NextButtonContainer';

import {
  selectCategory,
} from '../redux/slice';
import TalentBackEndForm from './TalentBackEndForm';

import Title from '../components/styles/Title';

function TalentBackEndFormContainer() {
  const dispatch = useDispatch();

  const { backEndCategories } = useSelector((state) => ({
    backEndCategories: state.backEndCategories,
  }));

  function handleClick({ category }) {
    dispatch(selectCategory(category));
  }

  return (
    <>
      <Title>백엔드 항목을 고르세요</Title>
      <TalentBackEndForm
        backEndCategories={backEndCategories}
        onClick={handleClick}
      />
      <div>
        <NextButtonContainer link="talent/proficiency" />
      </div>
    </>
  );
}

export default TalentBackEndFormContainer;
