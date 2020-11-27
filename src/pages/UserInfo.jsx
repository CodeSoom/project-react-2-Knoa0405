import React from 'react';

import styled from '@emotion/styled';

const UserInfoForm = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const Input = styled.input({
  border: '1px solid #000',
});

export default function UserInfo({
  userInfo: { nickname, email, kakaoID }, onChange,
}) {
  return (
    <UserInfoForm>
      <label htmlFor="nickname">
        Nickname
      </label>
      <Input type="text" id="nickname" name="nickname" value={nickname} onChange={onChange} />
      <label htmlFor="email">
        E-mail
      </label>
      <Input type="email" id="email" name="email" value={email} onChange={onChange} />
      <label htmlFor="kakaoID">
        KakaoID
      </label>
      <Input type="text" id="kakaoID" name="kakaoID" value={kakaoID} onChange={onChange} />
    </UserInfoForm>
  );
}
