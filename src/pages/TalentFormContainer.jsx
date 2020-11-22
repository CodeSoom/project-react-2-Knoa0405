import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import {
  selectTalent,
  loadCategories,
} from '../redux/slice';

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
    <>
      <div>
        <h2>내가 가진 재능을 고르세요!</h2>
        <ul>
          <li>
            <button
              type="button"
              onClick={handleClick}
              value="BackEnd"
            >
              백엔드
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={handleClick}
              value="FrontEnd"
            >
              프론트엔드
            </button>
          </li>
        </ul>
        <div>
          <Link to={`/talent/${frontOrBack}`}>다음</Link>
        </div>
      </div>
    </>
  );
}

export default TalentFormContainer;
