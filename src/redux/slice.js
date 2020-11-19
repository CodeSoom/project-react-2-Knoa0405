import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {},
  reducers: {
    initialActions(state, action) {
      return {
        ...state,
        action,
      };
    },
  },
});

export const { initialActions } = actions;

export default reducer;
