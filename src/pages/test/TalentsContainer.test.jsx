import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import TalentsContainer from '../TalentsContainer';

import manttoCategories from '../../fixture/manttoCategories';

jest.mock('react-redux');

describe('TalentsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      manttoCategories,
      CategoriesIsLoading: false,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  context('when start loading categories', () => {
    it('calls load mantto categories dispatch function ', () => {
      render(<TalentsContainer />);

      expect(dispatch).toBeCalled();
    });
  });
});
