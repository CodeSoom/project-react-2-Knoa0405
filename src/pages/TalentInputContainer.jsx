import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectTalent,
} from '../redux/slice';

function TalentInputContainer() {
  const { selectedTalent } = useSelector((state) => ({
    selectedTalent: state.selectedTalent,
  }));

  const dispatch = useDispatch();

  function handleClick(e) {
    const { target: { value } } = e;
    dispatch(selectTalent(value));
  }

  return (
    <>
      <div>
        <h2>내가 가진 재능을 고르세요!</h2>
        <ul>
          <li>
            <button
              type="button"
              onClick={() => handleClick}
            >
              백엔드
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleClick}
            >
              프론트엔드
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TalentInputContainer;
