import React from 'react';

import { fireEvent, render } from '@testing-library/react';

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

  context('when click level button', () => {
    const handleClick = jest.fn();

    it('calls handleClick function', () => {
      const { getByText } = render((
        <MemoryRouter>
          <TalentProficiencyContainer />
        </MemoryRouter>
      ));

      const levels = ['상', '중', '하'];

      levels.forEach((level) => {
        expect(getByText(level)).not.toBeNull();

        fireEvent.click(getByText(level));

        expect(handleClick).toBeCalled();
      });
    });
  });
});
