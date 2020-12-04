import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { useParams } from 'react-router-dom';

import {
  selectTalent,
  selectPassion,
  loadCategories,
} from '../redux/slice';

import TalentForm from './TalentForm';

import Title from '../components/styles/Title';

import NextButtonContainer from '../components/NextButtonContainer';

const FormLayout = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

function TalentFormContainer({ params }) {
  const { talentOrPassion } = params || useParams();

  const dispatch = useDispatch();

  const { selectedTalent, selectedTalentToLearn } = useSelector((state) => ({
    selectedTalent: state.selectedTalent,
    selectedTalentToLearn: state.selectedTalentToLearn,
  }));

  const { frontOrBack } = selectedTalent;

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  function handleClick(e) {
    const { value } = e.target;
    if (talentOrPassion === 'passion') {
      dispatch(selectPassion({ value }));
    }
    if (talentOrPassion === 'talent') {
      dispatch(selectTalent({ value }));
    }
  }

  if (talentOrPassion === 'passion') {
    const { frontOrBack: passionFrontOrBack } = selectedTalentToLearn;
    return (
      <FormLayout>
        <Title>내가 가진 열정 고르세요!</Title>
        <TalentForm onClick={handleClick} />
        <div>
          <NextButtonContainer link={`passion/${passionFrontOrBack}`} />
        </div>
      </FormLayout>
    );
  }

  return (
    <FormLayout>
      <Title>내가 가진 재능을 고르세요!</Title>
      <TalentForm onClick={handleClick} />
      <div>
        <NextButtonContainer link={`talent/${frontOrBack}`} />
      </div>
    </FormLayout>
  );
}

export default TalentFormContainer;
