import React from 'react';

import { useDispatch } from 'react-redux';

import {
  selectPassionCategory,
  selectTalentCategory,
  sendCategory,
} from '../redux/slice';

import CategoriesForm from './CategoriesForm';

function CategoriesFormContainer({ talentOrPassion, categories }) {
  const dispatch = useDispatch();

  function handleClick({ item }) {
    if (talentOrPassion === 'passion') {
      dispatch(selectPassionCategory(item));
    }
    if (talentOrPassion === 'talent') {
      dispatch(selectTalentCategory(item));
    }
  }

  function handleSubmit() {
    dispatch(sendCategory());
  }

  return (
    <>
      <CategoriesForm
        categories={categories}
        talentOrPassion={talentOrPassion}
        onClick={handleClick}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default CategoriesFormContainer;
