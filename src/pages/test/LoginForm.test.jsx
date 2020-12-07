import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import LoginForm from '../LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  const renderLoginForm = ({ username, password } = {}) => render((
    <LoginForm
      fields={{ username, password }}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />));

  context('when user inputs text', () => {
    it('render text', () => {
      const { getByLabelText } = renderLoginForm();

      const controls = [
        { label: 'ID', value: 'tester' },
        { label: 'PASSWORD', value: '1234' },
      ];

      controls.forEach(({ label, value }) => {
        fireEvent.change(getByLabelText(label), { target: { value } });

        expect(getByLabelText(label)).toHaveValue(value);
      });
    });

    it('calls handleChange function', () => {
      const { getByLabelText } = renderLoginForm();

      fireEvent.change(getByLabelText('ID'), { target: { value: 'tester' } });

      expect(handleChange).toBeCalled();
    });
  });

  context('when click "Sign In" button', () => {
    it('calls handleSubmit function', () => {
      const { getByText } = renderLoginForm();

      fireEvent.click(getByText('Sign In'));

      expect(handleSubmit).toBeCalled();
    });

    it('clear all input value', () => {
      const { getByText, getByLabelText } = renderLoginForm();

      fireEvent.click(getByText('Sign In'));

      expect(getByLabelText('ID').value).toBe('');
      expect(getByLabelText('PASSWORD').value).toBe('');
    });
  });
});
