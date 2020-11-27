import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import UserInfo from '../UserInfo';

describe('UserInfo', () => {
  const handleChange = jest.fn();

  const userInfo = {
    nickname: '',
    email: '',
    kakaoID: '',
  };

  it('renders inputs', () => {
    const { getByLabelText } = render((
      <UserInfo
        userInfo={userInfo}
        onChange={handleChange}
      />
    ));

    const inputLabels = ['Nickname', 'E-mail', 'KakaoID'];

    inputLabels.forEach((name) => {
      expect(getByLabelText(name)).not.toBeNull();
    });
  });

  context('when inputs change', () => {
    it('calls handleChange function', () => {
      const { getByLabelText } = render((
        <UserInfo
          userInfo={userInfo}
          onChange={handleChange}
        />
      ));

      const inputLabels = ['Nickname', 'E-mail', 'KakaoID'];

      inputLabels.forEach((name) => {
        expect(getByLabelText(name)).not.toBeNull();

        fireEvent.change(getByLabelText(name), { target: { value: 'test' } });

        expect(handleChange).toBeCalled();
      });
    });
  });
});
