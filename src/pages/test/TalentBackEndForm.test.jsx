import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import TalentBackEndForm from '../TalentBackEndForm';

describe('TalentBackEndForm', () => {
  const backEndCategories = [
    { id: 1, category: 'NodeJs' },
    { id: 2, category: 'PHP' },
  ];
  it('renders backEnd categories', () => {
    const { getByText } = render((
      <TalentBackEndForm
        backEndCategories={backEndCategories}
      />
    ));

    backEndCategories.forEach(({ category }) => {
      expect(getByText(category)).not.toBeNull();
    });
  });

  context('when click category', () => {
    const handleClick = jest.fn();

    it('calls handleClick function', () => {
      const { getByText } = render((
        <TalentBackEndForm
          backEndCategories={backEndCategories}
          onClick={handleClick}
        />
      ));

      fireEvent.click(getByText('NodeJs'));

      expect(handleClick).toBeCalled();
    });
  });
});
