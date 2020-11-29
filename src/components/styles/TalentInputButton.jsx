import styled from '@emotion/styled';

const TalentInputButton = styled.button({
  textAlign: 'center',
  marginTop: '1rem',
  width: '8rem',
  height: '3rem',
  border: '2px solid #080040',
  borderRadius: '10px',
  backgroundColor: '#FFF',
  '& a': {
    fontSize: '1.2rem',
    fontWeight: '700',
    textDecoration: 'none',
    display: 'block',
    paddingTop: '0.6rem',
    width: '100%',
    height: '100%',
    borderRadius: '7px',
    color: '#080040',
    '&:hover': {
      color: '#f6f6f8',
      borderColor: '#FFF',
      backgroundColor: '#080040',
    },
  },
  '&:focus': {
    color: '#f6f6f8',
    backgroundColor: '#080040',
    outline: 0,
  },
});

export default TalentInputButton;
