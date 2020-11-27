import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import reducer, {
  selectTalent,
  setCategories,
  selectCategory,
  loadCategories,
  selectProficiency,
  setManttoCategories,
  setUserInfo,
  loadManttoCategories,
  sendCategory,
} from './slice';

import manttoCategories from '../fixture/manttoCategories';

import { postCategory } from '../services/api';

describe('reducer', () => {
  context('when state is undefined', () => {
    const initialState = {
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

  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        backEndCategories: [],
        frontEndCategories: [],
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

      expect(state.backEndCategories).toHaveLength(1);
      expect(state.frontEndCategories).toHaveLength(1);
    });
  });

  describe('selectCategory', () => {
    it('changes select category', () => {
      const initialState = {
        selectedTalent: {
          frontOrBack: '',
          selectedCategory: '',
          proficiency: '',
        },
      };

      const category = 'ReactJs';

      const state = reducer(initialState, selectCategory(category));

      expect(state.selectedTalent.selectedCategory).toEqual('ReactJs');
    });
  });

  describe('selectProficiency', () => {
    it('changes select category', () => {
      const initialState = {
        selectedTalent: {
          frontOrBack: '',
          selectedCategory: '',
          proficiency: '',
        },
      };

      const level = '상';

      const state = reducer(initialState, selectProficiency(level));

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
      });
    });
  });

  describe('sendCategory', () => {
    beforeEach(() => {
      store = mockStore({
        manttoCategories: [],
      });
    });

    it('runs setManttoCategories', async () => {
      await store.dispatch(sendCategory());

      await postCategory({});

      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'application/setManttoCategories',
      });
    });
  });
});
