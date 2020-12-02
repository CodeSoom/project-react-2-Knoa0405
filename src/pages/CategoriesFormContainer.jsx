import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import NextButtonContainer from '../components/NextButtonContainer';

import {
  selectPassionCategory,
  selectTalentCategory,
  sendCategory,
} from '../redux/slice';

import CategoriesForm from './CategoriesForm';

import Title from '../components/styles/Title';

function CategoriesFormContainer({ params }) {
  const { talentOrPassion, categoryUrl } = params || useParams();

  const dispatch = useDispatch();

  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  function handleClick({ category }) {
    if (talentOrPassion === 'passion') {
      dispatch(selectPassionCategory(category));
    }
    dispatch(selectTalentCategory(category));
  }

  function handleSubmit() {
    dispatch(sendCategory());
  }

  return (
    <>
      <Title>
        {`${Object.keys(categories[categoryUrl])[0]}`}
        {' '}
        항목을 고르세요
      </Title>
      <CategoriesForm
        categories={Object.values(categories[categoryUrl])[0]}
        onClick={handleClick}
      />
      <div>
        {talentOrPassion === 'talent'
          ? <NextButtonContainer link="talent/proficiency" />
          : <NextButtonContainer link="talents" onSubmit={handleSubmit} />}
      </div>
    </>
  );
}

export default CategoriesFormContainer;
