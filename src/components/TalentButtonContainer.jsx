import React from 'react';

import { Link } from 'react-router-dom';

import TalentInputButton from './styles/TalentInputButton';

export default function TalentButtonContainer() {
  return (
    <>
      <TalentInputButton>
        <Link to="/userInfo">재능 입력</Link>
      </TalentInputButton>
      <TalentInputButton>
        <Link to="/talents">재능 목록</Link>
      </TalentInputButton>
    </>
  );
}
