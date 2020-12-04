import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import CategoriesPage from '../CategoriesPage';

import categories from '../../fixture/categories';

jest.mock('react-redux');

describe('CategoriesPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      categories,
    }));
  });

  const renderCategoriesPage = ({ params }) => render((
    <MemoryRouter>
      <CategoriesPage
        params={params}
      />
    </MemoryRouter>
  ));

  context('with parameters are talent and frontEnd', () => {
    it('renders "프론트엔드" ', () => {
      const { getByText } = renderCategoriesPage({
        params: { talentOrPassion: 'talent', category: 'frontEnd' },
      });

      expect(getByText(/프론트엔드/)).not.toBeNull();
    });
  });

  context('without parameters are nothing', () => {
    it('renders "항목이 없습니다." ', () => {
      const { getByText } = renderCategoriesPage({
        params: { talentOrPassion: 'nothing', category: 'nothing' },
      });

      expect(getByText(/항목이 없습니다./)).not.toBeNull();
    });
  });
});
