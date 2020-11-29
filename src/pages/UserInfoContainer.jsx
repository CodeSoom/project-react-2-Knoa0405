import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setUserInfo,
} from '../redux/slice';

import UserInfo from './UserInfo';

import Title from '../components/styles/Title';

import NextButtonContainer from '../components/NextButtonContainer';

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
    <>
      <Title>간단 정보 입력</Title>
      <UserInfo
        userInfo={userInfo}
        onChange={handleChange}
      />
      <NextButtonContainer link="talent" />
    </>
  );
}

export default UserInfoContainer;
