import React from 'react';

import TalentInputButton from '../components/styles/TalentInputButton';

import List from '../components/styles/List';

import Item from '../components/styles/Item';

export default function TalentForm({ onClick }) {
  return (
    <List>
      <Item>
        <TalentInputButton
          type="button"
          onClick={onClick}
          value="backEnd"
        >
          백엔드
        </TalentInputButton>
      </Item>
      <Item>
        <TalentInputButton
          type="button"
          onClick={onClick}
          value="frontEnd"
        >
          프론트엔드
        </TalentInputButton>
      </Item>
    </List>
  );
}
