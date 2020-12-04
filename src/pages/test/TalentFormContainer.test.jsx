import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import TalentFormContainer from '../TalentFormContainer';

jest.mock('react-redux');

describe('TalentFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      selectedTalent: {},
      selectedTalentToLearn: {},
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

  context('when parameter is talent ', () => {
    it('calls select talent dispatch function', () => {
      const { getByText } = render((
        <MemoryRouter>
          <TalentFormContainer params={{ talentOrPassion: 'talent' }} />
        </MemoryRouter>
      ));
      fireEvent.click(getByText('백엔드'));

      expect(dispatch).toBeCalledTimes(2);
    });
  });

  context('when parameter is passion ', () => {
    it('calls select passion dispatch function', () => {
      const { getByText } = render((
        <MemoryRouter>
          <TalentFormContainer params={{ talentOrPassion: 'passion' }} />
        </MemoryRouter>
      ));
      fireEvent.click(getByText('백엔드'));

      expect(dispatch).toBeCalledTimes(2);
    });
  });
});
