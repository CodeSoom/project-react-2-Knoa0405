import { createSlice } from '@reduxjs/toolkit';

import {
  fetchCategories,
  fetchManttoCategories,
  postCategory,
} from '../services/api';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    backEndCategories: [],
    frontEndCategories: [],
    manttoCategories: [],
    selectedTalent: {
      frontOrBack: '',
      selectedCategory: '',
      proficiency: '',
    },
    selectedTalentToLearn: {
      frontOrBack: '',
      selectedCategory: '',
    },
    userInfo: {
      nickname: '',
      email: '',
      kakaoID: '',
    },
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

    setUserInfo(state, { payload: { name, value } }) {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          [name]: value,
        },
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
  setUserInfo,
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

export function sendCategory() {
  return async (dispatch, getState) => {
    const { selectedTalent, selectedTalentToLearn, userInfo } = getState();

    await postCategory({
      selectedTalent, selectedTalentToLearn, userInfo,
    });

    dispatch(loadManttoCategories());
  };
}

export default reducer;
