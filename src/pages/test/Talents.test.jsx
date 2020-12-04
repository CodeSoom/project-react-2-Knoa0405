import React from 'react';

import { render } from '@testing-library/react';

import Talents from '../Talents';

import manttoCategories from '../../fixture/manttoCategories';

jest.mock('react-redux');

describe('Talents', () => {
  const renderTalents = ({ categories = manttoCategories, isLoading }) => render((
    <Talents categories={categories} isLoading={isLoading} />
  ));

  context('when cateogories are not all loading yet', () => {
    it('renders "로딩중" text', () => {
      const { container } = renderTalents({ isLoading: true });

      expect(container).toHaveTextContent('로딩중..!');
    });
  });

  context('when cateogories are null', () => {
    it('renders "만또가 없습니다." text', () => {
      const { container } = renderTalents({ categories: null });

      expect(container).toHaveTextContent('만또가 없습니다.');
    });
  });

  context('when cateogories are exist', () => {
    it('renders categories', () => {
      const { getByText } = renderTalents({ categories: manttoCategories });

      manttoCategories.forEach(([, value]) => {
        const regex = new RegExp(`${value.nickname}`);

        expect(getByText(regex)).not.toBeNull();
      });
    });
  });
});
