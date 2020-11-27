import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import {
  selectTalent,
  loadCategories,
} from '../redux/slice';

import TalentForm from './TalentForm';

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
    <div>
      <h2>내가 가진 재능을 고르세요!</h2>
      <TalentForm onClick={handleClick} />
      <div>
        <Link to={`/talent/${frontOrBack}`}>다음</Link>
      </div>
    </div>
  );
}

export default TalentFormContainer;
