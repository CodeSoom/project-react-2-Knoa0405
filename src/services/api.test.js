import {
  fetchCategories,
} from './api';

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() { return data; },
    });
  };

  describe('fetchCategories', () => {
    beforeEach(() => {
      mockFetch({
        frontEndCategories: [
          { id: 1, category: 'ReactJs' },
        ],
        backEndCategories: [
          { id: 1, category: 'NodeJs' },
        ],
      });
    });

    it('returns categories', async () => {
      const { frontEndCategories } = await fetchCategories();

      expect(frontEndCategories).toEqual({
        backEndCategories: [{ category: 'NodeJs', id: 1 }],
        frontEndCategories: [{ category: 'ReactJs', id: 1 }],
      });
    });
  });
});
