import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import {
  setUserInfo,
} from '../redux/slice';

import UserInfo from './UserInfo';

const UserInfoLayout = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

function UserInfoContainer() {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => ({
    userInfo: state.userInfo,
  }));

  function handleChange(e) {
    const { name, value } = e.target;

    dispatch(setUserInfo({ name, value }));
  }

  return (
    <UserInfoLayout>
      <p>간단 정보 입력</p>
      <UserInfo
        userInfo={userInfo}
        onChange={handleChange}
      />
      <div>
        <Link to="/talent">다음</Link>
      </div>
    </UserInfoLayout>
  );
}

export default UserInfoContainer;
