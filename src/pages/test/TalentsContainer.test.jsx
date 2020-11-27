import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import TalentsContainer from '../TalentsContainer';

import manttoCategories from '../../fixture/manttoCategories';

jest.mock('react-redux');

describe('TalentsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      selectedTalent: {
        frontOrBack: '',
        selectedCategory: '',
        proficiency: '',
      },
      manttoCategories,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders mantto categories', () => {
    const { getByText } = render((
      <TalentsContainer />
    ));

    manttoCategories.forEach(({ nickname }) => {
      expect(getByText(`nickname : ${nickname}`)).not.toBeNull();
    });
  });
});
