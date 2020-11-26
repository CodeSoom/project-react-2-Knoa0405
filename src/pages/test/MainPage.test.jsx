import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Mainpage from '../MainPage';

describe('Mainpage', () => {
  it('renders Mainpage', () => {
    const { container } = render((
      <MemoryRouter>
        <Mainpage />
      </MemoryRouter>
    ));
    expect(container).toHaveTextContent('재능 입력');
    expect(container).toHaveTextContent('재능 목록');
  });
});
