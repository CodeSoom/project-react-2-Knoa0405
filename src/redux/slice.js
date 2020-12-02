import { createSlice } from '@reduxjs/toolkit';

import {
  fetchCategories,
  fetchManttoCategories,
  postCategory,
} from '../services/api';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    categories: {
      backEnd: {
        백엔드: [],
      },
      frontEnd: {
        프론트엔드: [],
      },
    },
    manttoCategories: {},
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

    selectPassion(state, { payload: { value } }) {
      return {
        ...state,
        selectedTalentToLearn: {
          ...state.selectedTalentToLearn,
          frontOrBack: value,
        },
      };
    },

    setCategories(state, { payload: { frontEndCategories, backEndCategories } }) {
      return {
        ...state,
        categories: {
          backEnd: {
            백엔드: [...backEndCategories],
          },
          frontEnd: {
            프론트엔드: [...frontEndCategories],
          },
        },
      };
    },

    selectTalentCategory(state, { payload: category }) {
      return {
        ...state,
        selectedTalent: {
          ...state.selectedTalent,
          selectedCategory: category,
        },
      };
    },

    selectPassionCategory(state, { payload: category }) {
      return {
        ...state,
        selectedTalentToLearn: {
          ...state.selectedTalentToLearn,
          selectedCategory: category,
        },
      };
    },

    selectTalentProficiency(state, { payload: level }) {
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
  selectPassion,
  setCategories,
  selectTalentCategory,
  selectPassionCategory,
  selectTalentProficiency,
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
