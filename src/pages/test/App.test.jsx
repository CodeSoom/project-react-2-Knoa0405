import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import App from '../App';

describe('App', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      selectedTalent: {},
    }));
  });

  it('renders App', () => {
    render((
      <MemoryRouter>
        <App />
      </MemoryRouter>
    ));
  });
});
