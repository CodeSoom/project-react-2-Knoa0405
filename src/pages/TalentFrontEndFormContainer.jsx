import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  selectCategory,
} from '../redux/slice';

function TalentFrontEndFormContainer() {
  const dispatch = useDispatch();

  const { frontEndCategories } = useSelector((state) => ({
    frontEndCategories: state.frontEndCategories,
  }));

  function handleClick({ category }) {
    dispatch(selectCategory(category));
  }

  return (
    <div>
      <p>프론트엔드 항목을 고르세요</p>
      <ul>
        {frontEndCategories.map(({ id, category }) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => handleClick({ category })}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
      <div>
        <Link to="/talent/proficiency">다음</Link>
      </div>
    </div>
  );
}

export default TalentFrontEndFormContainer;
