import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import TalentFormContainer from '../TalentFormContainer';

jest.mock('react-redux');

describe('TalentFormContainer', () => {
  const dispatch = jest.fn();

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

  it('calls select talent dispatch function', () => {
    const { getByText } = render((
      <MemoryRouter>
        <TalentFormContainer />
      </MemoryRouter>
    ));
    fireEvent.click(getByText('백엔드'));

    expect(dispatch).toBeCalledTimes(3);
  });
});
