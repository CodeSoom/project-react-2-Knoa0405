import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import UserInfoContainer from '../UserInfoContainer';

jest.mock('react-redux');

describe('UserInfoContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      userInfo: {
        nickname: '',
        email: '',
        kakaoID: '',
      },
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders inputs', () => {
    const { getByLabelText } = render((
      <MemoryRouter>
        <UserInfoContainer />
      </MemoryRouter>
    ));

    const inputLabels = ['Nickname', 'E-mail', 'KakaoID'];

    inputLabels.forEach((name) => {
      expect(getByLabelText(name)).not.toBeNull();
    });
  });

  context('when inputs change', () => {
    it('calls set user info dispatch function', () => {
      const { getByLabelText } = render((
        <MemoryRouter>
          <UserInfoContainer />
        </MemoryRouter>
      ));

      const inputLabels = ['Nickname', 'E-mail', 'KakaoID'];

      inputLabels.forEach((name) => {
        expect(getByLabelText(name)).not.toBeNull();

        fireEvent.change(getByLabelText(name), { target: { value: 'test' } });

        expect(dispatch).toBeCalled();
      });
    });
  });
});
