import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    selectedTalent: {
      frontOrBack: '',
    },
  },
  reducers: {
    selectTalent(state, { payload: selectedTalent }) {
      return {
        ...state,
        selectedTalent,
      };
    },
  },
});

export const { selectTalent } = actions;

export default reducer;
