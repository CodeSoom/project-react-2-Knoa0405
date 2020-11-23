import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategory,
} from '../redux/slice';

function TalentBackEndFormContainer() {
  const dispatch = useDispatch();

  const { backEndCategories } = useSelector((state) => ({
    backEndCategories: state.backEndCategories,
  }));

  function handleClick({ category }) {
    dispatch(selectCategory(category));
  }

  return (
    <>
      <div>
        <p>백엔드 항목을 고르세요</p>
        <ul>
          {backEndCategories.map(({ id, category }) => (
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
      </div>
    </>
  );
}

export default TalentBackEndFormContainer;
