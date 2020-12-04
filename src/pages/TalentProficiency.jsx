import React from 'react';

import styled from '@emotion/styled';

import { darken } from 'polished';

import List from '../components/styles/List';

import Item from '../components/styles/Item';

import Title from '../components/styles/Title';

import NextButtonContainer from '../components/NextButtonContainer';

const ProficiencyButton = styled.button({
  padding: '10px',
  width: '40px',
  height: '40px',
  border: '1px solid #000',
  borderRadius: '50%',
},
(props) => ({
  backgroundColor: props.bgColor,
  ':focus': {
    backgroundColor: darken(0.1, props.bgColor),
    outline: 0,
  },
}));

function TalentProficiency({ selectedCategory, onClick }) {
  const levels = [
    { level: '상', bgColor: '#f7c42f' },
    { level: '중', bgColor: '#d4d5d9' },
    { level: '하', bgColor: '#a9743e' },
  ];

  return (
    <>
      <Title>{`${selectedCategory} 의 숙련도를 고르세요`}</Title>
      <List>
        {levels.map(({ level, bgColor }) => (
          <Item key={level}>
            <ProficiencyButton
              type="button"
              onClick={() => onClick(level)}
              bgColor={bgColor}
            >
              {level}
            </ProficiencyButton>
          </Item>
        ))}
      </List>
      <div>
        <NextButtonContainer link="passion" />
      </div>
    </>
  );
}

export default TalentProficiency;
