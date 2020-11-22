import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import TalentFormContainer from '../TalentFormContainer';

jest.mock('react-redux');

describe('TalentFormContainer', () => {
  const dispatch = useDispatch();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      selectedTalent: {},
    }));
    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders buttons', () => {
    const { getByText } = render((
      <MemoryRouter>
        <TalentFormContainer />
      </MemoryRouter>
    ));

    expect(getByText('백엔드')).not.toBeNull();
    expect(getByText('프론트엔드')).not.toBeNull();
  });
});
