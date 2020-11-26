import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadManttoCategories,
} from '../redux/slice';

function TalentsContainer() {
  const dispatch = useDispatch();

  const { selectedTalent, manttoCategories } = useSelector((state) => ({
    selectedTalent: state.selectedTalent,
    manttoCategories: state.manttoCategories,
  }));

  useEffect(() => {
    dispatch(loadManttoCategories());
  }, []);

  const { frontOrBack, selectedCategory, proficiency } = selectedTalent;

  return (
    <div>
      <ul>
        {manttoCategories.map((category) => (
          <li key={category.id}>{category.nickname}</li>
        ))}
      </ul>
      <p>만또들의 재능들</p>
      <p>{frontOrBack}</p>
      <p>{selectedCategory}</p>
      <p>{proficiency}</p>
    </div>
  );
}

export default TalentsContainer;
