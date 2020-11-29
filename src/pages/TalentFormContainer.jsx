import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import {
  selectTalent,
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

function TalentFormContainer() {
  const dispatch = useDispatch();

  const { selectedTalent } = useSelector((state) => ({
    selectedTalent: state.selectedTalent,
  }));

  const { frontOrBack } = selectedTalent;

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  function handleClick(e) {
    const { value } = e.target;
    dispatch(selectTalent({ value }));
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
