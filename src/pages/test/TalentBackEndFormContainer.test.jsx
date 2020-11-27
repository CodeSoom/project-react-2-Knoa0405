import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import TalentBackEndFormContainer from '../TalentBackEndFormContainer';

jest.mock('react-redux');

describe('TalentBackEndFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      backEndCategories: [
        { id: 1, category: 'NodeJs' },
        { id: 2, category: 'PHP' },
      ],
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders backEnd categories', () => {
    const { getByText } = render((
      <MemoryRouter>
        <TalentBackEndFormContainer />
      </MemoryRouter>
    ));

    const backEndCategories = [
      { id: 1, category: 'NodeJs' },
      { id: 2, category: 'PHP' },
    ];

    backEndCategories.forEach(({ category }) => {
      expect(getByText(category)).not.toBeNull();
    });
  });

  context('when click category', () => {
    it('calls select category dispatch function', () => {
      const { getByText } = render((
        <MemoryRouter>
          <TalentBackEndFormContainer />
        </MemoryRouter>
      ));

      fireEvent.click(getByText('NodeJs'));

      expect(dispatch).toBeCalled();
    });
  });
});
