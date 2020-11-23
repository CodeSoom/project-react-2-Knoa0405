import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import reducer, {
  selectTalent,
  setCategories,
  selectCategory,
  loadCategories,
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
