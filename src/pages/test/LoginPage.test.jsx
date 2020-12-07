import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginPage from '../LoginPage';

jest.mock('react-redux');

describe('LoginPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      loginFields: { username: '', password: '' },
    }));
  });
  it('renders "로그인" text', () => {
    const { container } = render(<LoginPage />);

    expect(container).toHaveTextContent('로그인');
  });

  it('renders inputs', () => {
    const { getByLabelText } = render(<LoginPage />);

    expect(getByLabelText('ID')).not.toBeNull();
    expect(getByLabelText('PASSWORD')).not.toBeNull();
  });

  it('renders "Sign In" button', () => {
    const { getByText } = render(<LoginPage />);

    expect(getByText('Sign In')).not.toBeNull();
  });
});
