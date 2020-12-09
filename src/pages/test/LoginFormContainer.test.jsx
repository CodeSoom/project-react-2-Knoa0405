import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from '../LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      loginFields: { username: '', password: '' },
      loginError: { code: '', message: '' },
      user: '',
    }));
    useDispatch.mockImplementation(() => dispatch);
  });

  const renderLoginFormContainer = () => render((
    <LoginFormContainer />));

  it('calls setLoginFields dispatch function', () => {
    const { getByLabelText } = renderLoginFormContainer({ loginId: '', loginPwd: '' });

    fireEvent.change(getByLabelText('ID'), { target: { value: 'tester' } });

    expect(dispatch).toBeCalled();
  });

  context('when click "Sign In" button', () => {
    it('calls handleSubmit function', () => {
      const { getByText } = renderLoginFormContainer({ loginId: '', loginPwd: '' });

      fireEvent.click(getByText('Sign In'));

      expect(dispatch).toBeCalled();
    });

    it('calls clear all login fields dispatch function', () => {
      const { getByText, getByLabelText } = renderLoginFormContainer({ loginId: '', loginPwd: '' });

      fireEvent.click(getByText('Sign In'));

      expect(dispatch).toBeCalled();

      expect(getByLabelText('ID').value).toBe('');
      expect(getByLabelText('PASSWORD').value).toBe('');
    });
  });
});
