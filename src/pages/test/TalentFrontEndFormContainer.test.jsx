import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import TalentFrontEndFormContainer from '../TalentFrontEndFormContainer';

jest.mock('react-redux');

describe('TalentFrontEndFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      frontEndCategories: [
        { id: 1, category: 'ReactJs' },
        { id: 2, category: 'VueJs' },
      ],
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders frontEnd categories', () => {
    const { getByText } = render((
      <MemoryRouter>
        <TalentFrontEndFormContainer />
      </MemoryRouter>
    ));

    const frontEndCategories = [
      { id: 1, category: 'ReactJs' },
      { id: 2, category: 'VueJs' },
    ];

    frontEndCategories.forEach(({ category }) => {
      expect(getByText(category)).not.toBeNull();
    });
  });

  context('when click category', () => {
    it('calls select category dispatch function', () => {
      const { getByText } = render((
        <MemoryRouter>
          <TalentFrontEndFormContainer />
        </MemoryRouter>
      ));

      fireEvent.click(getByText('ReactJs'));

      expect(dispatch).toBeCalled();
    });
  });
});
