import React from 'react';

import { useSelector } from 'react-redux';

function TalentsContainer() {
  const { selectedTalent } = useSelector((state) => ({
    selectedTalent: state.selectedTalent,
  }));

  const { frontOrBack, selectedCategory, proficiency } = selectedTalent;

  return (
    <div>
      <p>만또들의 재능들</p>
      <p>{frontOrBack}</p>
      <p>{selectedCategory}</p>
      <p>{proficiency}</p>
    </div>
  );
}

export default TalentsContainer;
