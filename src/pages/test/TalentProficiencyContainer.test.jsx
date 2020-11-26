import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import TalentProficiencyContainer from '../TalentProficiencyContainer';

jest.mock('react-redux');

describe('TalentProficiencyContainer', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      selectedTalent: {
        selectedCategory: 'NodeJs',
      },
    }));

    useDispatch.mockImplementation(() => dispatch);
  });
  it('renders selected talent', () => {
    const { container } = render((
      <MemoryRouter>
        <TalentProficiencyContainer />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('NodeJs');
  });
});
