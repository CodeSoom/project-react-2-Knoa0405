import { createSlice } from '@reduxjs/toolkit';

import {
  fetchCategories,
} from '../services/api';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    selectedTalent: {
      frontOrBack: '',
    },
    backEndCategories: [],
    frontEndCategories: [],
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
  },
});

export const {
  selectTalent,
  setCategories,
} = actions;

export function loadCategories() {
  return async (dispatch) => {
    const { frontEndCategories, backEndCategories } = await fetchCategories();

    dispatch(setCategories({ frontEndCategories, backEndCategories }));
  };
}

export default reducer;
