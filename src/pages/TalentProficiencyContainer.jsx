import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { selectProficiency } from '../redux/slice';

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
    <div>
      <p>해당 재능의 숙련도를 고르세요</p>
      <p>{selectedCategory}</p>
      <ul>
        {['상', '중', '하'].map((level) => (
          <li key={level}>
            <button
              type="button"
              onClick={() => handleClick(level)}
            >
              {level}
            </button>
          </li>
        ))}
      </ul>
      <div>
        <Link to="/talents">다음</Link>
      </div>
    </div>
  );
}

export default TalentProficiencyContainer;
