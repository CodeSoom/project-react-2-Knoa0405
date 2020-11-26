import React from 'react';

import styled from '@emotion/styled';

const TalentAndPassion = styled.div({
  display: 'flex',
  justifyContent: 'space-around',
});

const TalentContainer = styled.div({
  padding: '1rem',
  '& p': {
    fontSize: '1rem',
    fontWeight: '700',
    paddingBottom: '0.5rem',
    '& span': {
      color: '#80bfd7',
    },
  },
  '& p:nth-of-type(2)': {
    fontSize: '0.8rem',
  },
});

const PassionContainer = styled.div({
  padding: '1rem',
  '& p': {
    fontSize: '1rem',
    fontWeight: '700',
    paddingBottom: '0.5rem',
    '& span': {
      color: '#eaa786',
    },
  },
  '& p:nth-of-type(2)': {
    fontSize: '0.8rem',
  },
});

export default function TalentAndPassionContainer({
  talent, talentToLearn,
}) {
  return (
    <TalentAndPassion>
      <TalentContainer>
        <p>
          가르쳐줄게
          {' '}
          <span>재능</span>
        </p>
        <p>
          {talent.frontOrBack}
          {' '}
          {talent.selectedCategory}
          {' '}
          {talent.proficiency}
        </p>
      </TalentContainer>
      <PassionContainer>
        <p>
          배우고 싶다
          {' '}
          <span>열정</span>
        </p>
        <p>
          {talentToLearn.frontOrBack}
          {' '}
          {talentToLearn.selectedCategory}
        </p>
      </PassionContainer>
    </TalentAndPassion>
  );
}
