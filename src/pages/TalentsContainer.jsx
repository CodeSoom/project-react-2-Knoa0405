import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadManttoCategories,
} from '../redux/slice';

import Talents from './Talents';

export default function TalentsContainer() {
  const dispatch = useDispatch();

  const { CategoriesIsLoading, manttoCategories } = useSelector((state) => ({
    manttoCategories: state.manttoCategories,
    CategoriesIsLoading: state.CategoriesIsLoading,
  }));

  useEffect(() => {
    dispatch(loadManttoCategories());
  }, []);

  return (
    <Talents
      isLoading={CategoriesIsLoading}
      categories={manttoCategories}
    />
  );
}
