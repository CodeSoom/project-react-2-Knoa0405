import { createSlice } from '@reduxjs/toolkit';

import {
  fetchCategories,
  fetchManttoCategories,
} from '../services/api';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    selectedTalent: {
      frontOrBack: '',
      selectedCategory: '',
      proficiency: '',
    },
    backEndCategories: [],
    frontEndCategories: [],
    manttoCategories: [],
  },
  reducers: {
    selectTalent(state, { payload: { value } }) {
      return {
        ...state,
        selectedTalent: {
          ...state.selectedTalent,
          frontOrBack: value,
        },
      };
    },

    setCategories(state, { payload: { frontEndCategories, backEndCategories } }) {
      return {
        ...state,
        backEndCategories,
        frontEndCategories,
      };
    },

    selectCategory(state, { payload: category }) {
      return {
        ...state,
        selectedTalent: {
          ...state.selectedTalent,
          selectedCategory: category,
        },
      };
    },

    selectProficiency(state, { payload: level }) {
      return {
        ...state,
        selectedTalent: {
          ...state.selectedTalent,
          proficiency: level,
        },
      };
    },

    setManttoCategories(state, { payload: manttoCategories }) {
      return {
        ...state,
        manttoCategories,
      };
    },
  },
});

export const {
  selectTalent,
  setCategories,
  selectCategory,
  selectProficiency,
  setManttoCategories,
} = actions;

export function loadCategories() {
  return async (dispatch) => {
    const { frontEndCategories, backEndCategories } = await fetchCategories();

    dispatch(setCategories({ frontEndCategories, backEndCategories }));
  };
}

export function loadManttoCategories() {
  return async (dispatch) => {
    const { categories: manttoCategories } = await fetchManttoCategories();

    dispatch(setManttoCategories(manttoCategories));
  };
}

export default reducer;
