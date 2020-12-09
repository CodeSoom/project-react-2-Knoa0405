import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import reducer, {
  selectTalent,
  setCategories,
  selectTalentCategory,
  loadCategories,
  selectTalentProficiency,
  setManttoCategories,
  setUserInfo,
  setLoginFields,
  loadManttoCategories,
  sendCategory,
  selectPassionCategory,
  selectPassion,
  requestSignUp,
  setError,
} from './slice';

import manttoCategories from '../fixture/manttoCategories';

import { postCategory, postSignUp } from '../services/api';

describe('reducer', () => {
  context('when state is undefined', () => {
    const initialState = {
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
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('selectTalent', () => {
    it('changes selected talent', () => {
      const initialState = {
        selectedTalent: {
          frontOrBack: '',
        },
      };

      const value = 'FrontEnd';

      const state = reducer(initialState, selectTalent({ value }));

      expect(state.selectedTalent.frontOrBack).toEqual('FrontEnd');
    });
  });

  describe('selectPassion', () => {
    it('changes selected passion', () => {
      const initialState = {
        selectedTalentToLearn: {
          frontOrBack: '',
        },
      };

      const value = 'FrontEnd';

      const state = reducer(initialState, selectPassion({ value }));

      expect(state.selectedTalentToLearn.frontOrBack).toEqual('FrontEnd');
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: {
          backEnd: {
            백엔드: [],
          },
          frontEnd: {
            프론트엔드: [],
          },
        },
      };

      const backEndCategories = [
        { id: 1, category: 'NodeJs' },
      ];

      const frontEndCategories = [
        { id: 1, category: 'ReactJs' },
      ];

      const state = reducer(
        initialState, setCategories({ backEndCategories, frontEndCategories }),
      );

      expect(state.categories.backEnd['백엔드']).toHaveLength(1);
      expect(state.categories.frontEnd['프론트엔드']).toHaveLength(1);
    });
  });

  describe('selectTalentCategory', () => {
    it('changes select talent category', () => {
      const initialState = {
        selectedTalent: {
          frontOrBack: '',
          selectedCategory: '',
          proficiency: '',
        },
      };

      const category = 'ReactJs';

      const state = reducer(initialState, selectTalentCategory(category));

      expect(state.selectedTalent.selectedCategory).toEqual('ReactJs');
    });
  });

  describe('selectPassionCategory', () => {
    it('changes select passion category', () => {
      const initialState = {
        selectedTalentToLearn: {
          frontOrBack: '',
          selectedCategory: '',
        },
      };

      const category = 'ReactJs';

      const state = reducer(initialState, selectPassionCategory(category));

      expect(state.selectedTalentToLearn.selectedCategory).toEqual('ReactJs');
    });
  });

  describe('selectTalentProficiency', () => {
    it('changes select category', () => {
      const initialState = {
        selectedTalent: {
          frontOrBack: '',
          selectedCategory: '',
          proficiency: '',
        },
      };

      const level = '상';

      const state = reducer(initialState, selectTalentProficiency(level));

      expect(state.selectedTalent.proficiency).toEqual('상');
    });
  });

  describe('setManttoCategories', () => {
    it('changes mantto categories', () => {
      const initialState = {
        manttoCategories: [],
      };

      const state = reducer(initialState, setManttoCategories(manttoCategories));

      expect(state.manttoCategories).toHaveLength(3);
    });
  });

  describe('setUserInfo', () => {
    it('changes user informations', () => {
      const initialState = {
        userInfo: {
          nickname: '',
          email: '',
          kakaoID: '',
        },
      };

      const state = reducer(initialState, setUserInfo({
        name: 'nickname', value: '테스터',
      }));

      expect(state.userInfo.nickname).toEqual('테스터');

      expect(state.userInfo.email).toEqual('');
    });
  });

  describe('setLoginFields', () => {
    it('changes login fields', () => {
      const initialState = {
        loginFields: {
          username: '',
          password: '',
        },
      };

      const state = reducer(initialState, setLoginFields({
        name: 'username', value: 'tester',
      }));

      expect(state.loginFields.username).toEqual('tester');
      expect(state.loginFields.password).toEqual('');
    });
  });

  describe('setError', () => {
    it('changes mantto categories', () => {
      const initialState = {
        loginError: {
          code: '',
          message: '',
        },
      };

      const errorMessage = 'invalid ID';

      const state = reducer(initialState, setError({ errorCode: '', errorMessage }));

      expect(state.loginError.message).toEqual(errorMessage);
    });
  });
});

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

jest.mock('../services/api');

describe('actions', () => {
  let store;

  describe('loadCategories', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('runs setCategories', async () => {
      await store.dispatch(loadCategories());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setCategories({}));
    });
  });

  describe('loadManttoCategories', () => {
    beforeEach(() => {
      store = mockStore({
        manttoCategories: [],
      });
    });

    it('runs setManttoCategories', async () => {
      await store.dispatch(loadManttoCategories());

      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'application/setManttoCategories',
        payload: {},
      });
    });
  });

  describe('sendCategory', () => {
    beforeEach(() => {
      store = mockStore({
        manttoCategories: {},
      });
    });

    it('runs setManttoCategories', async () => {
      await store.dispatch(sendCategory());

      await postCategory({});

      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'application/setManttoCategories',
        payload: {},
      });
    });
  });

  describe('requestSignUp', () => {
    beforeEach(() => {
      store = mockStore({
        loginFields: { username: '', password: '' },
      });
    });

    it('runs requestSignUp', async () => {
      await store.dispatch(requestSignUp());

      await postSignUp({});

      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'application/setError',
        payload: {
          errorCode: '',
          errorMessage: '',
        },
      });
    });
  });
});
