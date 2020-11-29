import styled from '@emotion/styled';

const CategoryButton = styled.button({
  fontSize: '20px',
  border: '1px solid #000',
  borderRadius: '10px',
  backgroundColor: '#FFF',
  padding: '10px',
  '&:focus': {
    color: '#FFF',
    backgroundColor: '#080040',
    outline: 0,
  },
});

export default CategoryButton;
