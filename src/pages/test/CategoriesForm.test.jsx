import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import CategoriesForm from '../CategoriesForm';

describe('CategoriesForm', () => {
  const handleClick = jest.fn();
  const handleSubmit = jest.fn();

  const categories = [
    { id: 1, category: 'ReactJs' },
    { id: 2, category: 'VueJs' },
  ];

  const renderCategoriesForm = ({ talentOrPassion = 'talent' }) => render((
    <MemoryRouter>
      <CategoriesForm
        categories={categories}
        talentOrPassion={talentOrPassion}
        onClick={handleClick}
        onSubmit={handleSubmit}
      />
    </MemoryRouter>
  ));

  describe('talentOrPassion parameter is a talent', () => {
    it('renders categories', () => {
      const { getByText } = renderCategoriesForm({ talentOrPassion: 'talent' });

      categories.forEach(({ category }) => {
        const regex = new RegExp(`${category}`);

        expect(getByText(regex)).not.toBeNull();
      });
    });

    context('When click a category', () => {
      it('calls handleClick function', () => {
        const { getByText } = renderCategoriesForm({ talentOrPassion: 'talent' });

        fireEvent.click(getByText(/ReactJs/));

        expect(handleClick).toBeCalled();
      });
    });
  });

  describe('talentOrPassion parameter is a passion', () => {
    context('when click "arrowRight" button ', () => {
      it('calls handleSubmit function', () => {
        const { container } = renderCategoriesForm({ talentOrPassion: 'passion' });

        const button = container.querySelector('a[href="/talents"]');

        fireEvent.click(button);

        expect(handleSubmit).toBeCalled();
      });
    });
  });
});
