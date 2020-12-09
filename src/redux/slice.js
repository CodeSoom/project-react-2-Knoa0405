import { createSlice } from '@reduxjs/toolkit';

import {
  fetchCategories,
  fetchManttoCategories,
  postCategory,
  postSignIn,
  postSignUp,
} from '../services/api';

import { auth } from '../services/firebase';

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
    manttoCategories: [],
    CategoriesIsLoading: true,
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
    loginFields: {
      username: '',
      password: '',
    },
    user: '',
    loginError: {
      code: '',
      message: '',
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

    selectTalentCategory(state, { payload: item }) {
      return {
        ...state,
        selectedTalent: {
          ...state.selectedTalent,
          selectedCategory: item,
        },
      };
    },

    selectPassionCategory(state, { payload: item }) {
      return {
        ...state,
        selectedTalentToLearn: {
          ...state.selectedTalentToLearn,
          selectedCategory: item,
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
        manttoCategories: Object.entries(manttoCategories).sort(([, value]) => -value.timeStamp),
        CategoriesIsLoading: false,
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

    setLoginFields(state, { payload: { name, value } }) {
      return {
        ...state,
        loginFields: {
          ...state.loginFields,
          [name]: value,
        },
      };
    },

    clearLoginFields(state) {
      return {
        ...state,
        loginFields: {
          username: '',
          password: '',
        },
      };
    },

    setError(state, { payload: { errorCode, errorMessage } }) {
      return {
        ...state,
        loginError: {
          ...state.loginError,
          code: errorCode,
          message: errorMessage,
        },
      };
    },

    setUser(state, { payload: user }) {
      return {
        ...state,
        user,
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
  setLoginFields,
  clearLoginFields,
  setError,
  setUser,
} = actions;

export function loadCategories() {
  return async (dispatch) => {
    const { frontEndCategories, backEndCategories } = await fetchCategories();

    dispatch(setCategories({ frontEndCategories, backEndCategories }));
  };
}

export function loadManttoCategories() {
  return async (dispatch) => {
    const { categories: manttoCategories = {} } = await fetchManttoCategories();

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

export function requestSignUp() {
  return async (dispatch, getState) => {
    const { loginFields: { username, password } } = getState();

    const { errorCode = '', errorMessage = '' } = await postSignUp({ username, password });

    dispatch(setError({ errorCode, errorMessage }));

    dispatch(clearLoginFields());
  };
}

export function requestSignIn() {
  return async (dispatch, getState) => {
    const { loginFields: { username, password } } = getState();

    const { errorCode = '', errorMessage = '' } = await postSignIn({ username, password });

    const user = auth.currentUser;

    dispatch(setError({ errorCode, errorMessage }));

    dispatch(clearLoginFields());
  };
}

export default reducer;
