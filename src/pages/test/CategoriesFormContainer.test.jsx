import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import CategoriesFormContainer from '../CategoriesFormContainer';

jest.mock('react-redux');

describe('CategoriesFormContainer', () => {
  const dispatch = jest.fn();

  const categoriesValues = [
    { id: 1, category: 'ReactJs' },
    { id: 2, category: 'VueJs' },
  ];

  const renderCategoriesFormContainer = ({ talentOrPassion }) => render((
    <MemoryRouter>
      <CategoriesFormContainer
        talentOrPassion={talentOrPassion}
        categoriesValues={categoriesValues}
      />
    </MemoryRouter>
  ));

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  context('with talentOrPassion parameter is a talent', () => {
    const talentOrPassion = 'talent';

    it('renders categories', () => {
      const { getByText } = renderCategoriesFormContainer({
        talentOrPassion,
      });

      categoriesValues.forEach(({ category }) => {
        const regex = new RegExp(`${category}`);

        expect(getByText(regex)).not.toBeNull();
      });
    });

    context('when click category', () => {
      it('calls select talent category dispatch function', () => {
        const { getByText } = renderCategoriesFormContainer({
          talentOrPassion,
        });

        categoriesValues.forEach(({ category }) => {
          const regex = new RegExp(`${category}`);

          fireEvent.click(getByText(regex));

          expect(dispatch).toBeCalled();
        });
      });
    });
  });

  context('with talentOrPassion parameter is a passion', () => {
    const talentOrPassion = 'passion';

    it('renders categories', () => {
      const { getByText } = renderCategoriesFormContainer({
        talentOrPassion,
      });

      categoriesValues.forEach(({ category }) => {
        const regex = new RegExp(`${category}`);

        expect(getByText(regex)).not.toBeNull();
      });
    });

    context('when click "arrowLeft" button', () => {
      it('calls send category dispatch function', () => {
        const { container } = renderCategoriesFormContainer({
          talentOrPassion,
        });

        const button = container.querySelector('a[href="/talents"]');

        fireEvent.click(button);

        expect(dispatch).toBeCalled();
      });
    });

    context('when click category', () => {
      it('calls select passion category dispatch function', () => {
        const { getByText } = renderCategoriesFormContainer({
          talentOrPassion,
        });

        categoriesValues.forEach(({ category }) => {
          const regex = new RegExp(`${category}`);

          fireEvent.click(getByText(regex));

          expect(dispatch).toBeCalled();
        });
      });
    });
  });
});
