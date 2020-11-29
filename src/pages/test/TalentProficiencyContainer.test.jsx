import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import TalentProficiencyContainer from '../TalentProficiencyContainer';

jest.mock('react-redux');

describe('TalentProficiencyContainer', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();

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
  it('calls select proficiency dispatch functions', () => {
    const { getByText } = render((
      <MemoryRouter>
        <TalentProficiencyContainer />
      </MemoryRouter>
    ));

    fireEvent.click(getByText('상'));

    expect(dispatch).toBeCalledTimes(1);
  });

  it('calls send category dispatch functions', () => {
    const { container } = render((
      <MemoryRouter>
        <TalentProficiencyContainer />
      </MemoryRouter>
    ));

    const button = container.querySelector('a[href="/talents"]');

    fireEvent.click(button);

    expect(dispatch).toBeCalledTimes(1);
  });
});
