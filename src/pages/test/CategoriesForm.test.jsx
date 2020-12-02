import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import CategoriesForm from '../CategoriesForm';

describe('CategoriesForm', () => {
  const frontEndCategories = [
    { id: 1, category: 'ReactJs' },
    { id: 2, category: 'VueJs' },
  ];
  it('renders backEnd categories', () => {
    const { getByText } = render((
      <CategoriesForm
        frontEndCategories={frontEndCategories}
      />
    ));

    frontEndCategories.forEach(({ category }) => {
      const regex = new RegExp(`${category}`);

      expect(getByText(regex)).not.toBeNull();
    });
  });

  context('when click category', () => {
    const handleClick = jest.fn();

    it('calls handleClick function', () => {
      const { getByText } = render((
        <CategoriesForm
          frontEndCategories={frontEndCategories}
          onClick={handleClick}
        />
      ));

      fireEvent.click(getByText(/ReactJs/));

      expect(handleClick).toBeCalled();
    });
  });
});
