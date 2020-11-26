import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import reducer, {
  selectTalent,
  setCategories,
  selectCategory,
  loadCategories,
  selectProficiency,
  setManttoCategories,
} from './slice';

describe('reducer', () => {
  context('when state is undefined', () => {
    const initialState = {
      selectedTalent: {
        frontOrBack: '',
        selectedCategory: '',
        proficiency: '',
      },
      backEndCategories: [],
      frontEndCategories: [],
      manttoCategories: [],
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

      const manttoCategories = [
        {
          id: 1,
          nickname: '만또1',
          talent: {
            frontOrBack: 'frontEnd',
            selectedCategory: 'ReactJs',
            proficiency: '상',
          },
          talentToLearn: {
            frontOrBack: 'backEnd',
            selectedCategory: 'NodeJs',
          },
          email: 'test@example.com',
          kakaoID: 'tester1',
        },
      ];

      const state = reducer(initialState, setManttoCategories(manttoCategories));

      expect(state.manttoCategories).toHaveLength(1);
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
});
