import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import TalentForm from '../TalentForm';

describe('TalentForm', () => {
  const frontOrBack = ['프론트엔드', '백엔드'];
  it('renders buttons', () => {
    const { getByText } = render((
      <TalentForm />
    ));

    frontOrBack.forEach((category) => {
      expect(getByText(category)).not.toBeNull();
    });
  });

  context('when click category', () => {
    const handleClick = jest.fn();

    it('calls handleClick function', () => {
      const { getByText } = render((
        <TalentForm
          onClick={handleClick}
        />
      ));

      fireEvent.click(getByText('프론트엔드'));

      expect(handleClick).toBeCalled();
    });
  });
});
