import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import TalentProficiency from '../TalentProficiency';

describe('TalentProficiency', () => {
  context('when click level button', () => {
    const handleClick = jest.fn();

    it('calls handleClick function', () => {
      const { getByText } = render((
        <MemoryRouter>
          <TalentProficiency
            onClick={handleClick}
          />
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
