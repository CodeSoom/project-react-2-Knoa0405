import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectProficiency, sendCategory,
} from '../redux/slice';

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

  function handleSubmit() {
    dispatch(sendCategory());
  }

  return (
    <TalentProficiency
      selectedCategory={selectedCategory}
      onClick={handleClick}
      onSubmit={handleSubmit}
    />
  );
}

export default TalentProficiencyContainer;
