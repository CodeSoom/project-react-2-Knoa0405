import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import {
  selectCategory,
} from '../redux/slice';
import TalentBackEndForm from './TalentBackEndForm';

function TalentBackEndFormContainer() {
  const dispatch = useDispatch();

  const { backEndCategories } = useSelector((state) => ({
    backEndCategories: state.backEndCategories,
  }));

  function handleClick({ category }) {
    dispatch(selectCategory(category));
  }

  return (
    <div>
      <p>백엔드 항목을 고르세요</p>
      <TalentBackEndForm
        backEndCategories={backEndCategories}
        onClick={handleClick}
      />
      <div>
        <Link to="/talent/proficiency">다음</Link>
      </div>
    </div>
  );
}

export default TalentBackEndFormContainer;
