import React from 'react';

import styled from '@emotion/styled';

const ManttoProfile = styled.div({
  paddingLeft: '40px',
});

export default function ManttoProfileContainer({
  nickname, email, kakaoID,
}) {
  return (
    <ManttoProfile>
      <p>
        nickname :
        {' '}
        {nickname}
      </p>
      <p>
        Email :
        {' '}
        {email}
      </p>
      <p>
        kakaoID :
        {' '}
        {kakaoID}
      </p>
    </ManttoProfile>
  );
}
