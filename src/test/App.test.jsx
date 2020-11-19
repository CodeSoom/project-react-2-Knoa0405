import React from 'react';

import { render } from '@testing-library/react';

import App from '../App';

describe('App', () => {
  it('renders App', () => {
    const { container } = render((
      <App />
    ));

    expect(container).toHaveTextContent('Hello');
  });
});
