import React from 'react';

import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import Title from '../components/styles/Title';

import CategoriesFormContainer from './CategoriesFormContainer';

function CategoriesPage({ params }) {
  const { talentOrPassion, category } = params || useParams();

  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  const categoriesKeys = categories[category]
    ? Object.keys(categories[category])[0] : '';
  const categoriesValues = categories[category]
    ? Object.values(categories[category])[0] : [];

  if (categoriesKeys === '') {
    return (
      <p>항목이 없습니다.</p>
    );
  }

  return (
    <>
      <Title>
        {`${categoriesKeys}`}
        {' '}
        항목을 고르세요
      </Title>
      <CategoriesFormContainer
        talentOrPassion={talentOrPassion}
        categories={categoriesValues}
      />
    </>
  );
}

export default CategoriesPage;
