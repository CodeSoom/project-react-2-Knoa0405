import styled from '@emotion/styled';

const TalentInputButton = styled.div({
  width: '8rem',
  height: '3rem',
  border: '1px solid #000',
  borderRadius: '10px',
  textAlign: 'center',
  paddingTop: '0.6rem',
  marginTop: '1rem',
  '& a': {
    display: 'block',
    width: '100%',
    height: '100%',
    color: '#080040',
    fontSize: '1.2rem',
    fontWeight: '700',
    textDecoration: 'none',
    '&:hover': {
      color: '#f6f6f8',
    },
  },
  '&:hover': {
    backgroundColor: '#080040',
    fontSize: '1.25rem',
  },
});

export default TalentInputButton;
