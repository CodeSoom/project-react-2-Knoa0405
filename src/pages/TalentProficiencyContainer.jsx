import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { selectProficiency } from '../redux/slice';

import TalentProficiency from './TalentProficiency';

function TalentProficiencyContainer() {
  const { selectedTalent } = useSelector((state) => ({
    selectedTalent: state.selectedTalent,

  }));

  const { selectedCategory } = selectedTalent;

  const dispatch = useDispatch();

  function handleClick(level) {
    dispatch(selectProficiency(level));
  }

  return (
    <TalentProficiency
      selectedCategory={selectedCategory}
      onClick={handleClick}
    />
  );
}

export default TalentProficiencyContainer;
