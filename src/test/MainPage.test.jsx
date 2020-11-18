import React from 'react';

import { render } from '@testing-library/react';

import Mainpage from '../pages/MainPage';

describe('Mainpage', () => {
  it('renders Mainpage', () => {
    const { container } = render((
      <Mainpage />
    ));
    expect(container).toHaveTextContent('Hello');
  });
});
