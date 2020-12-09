import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import App from '../App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      selectedTalent: {},
      loginFields: {
        username: '',
        password: '',
      },
      loginError: {
        code: '',
        message: '',
      },
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders App', () => {
    render((
      <MemoryRouter>
        <App />
      </MemoryRouter>
    ));
  });
});
