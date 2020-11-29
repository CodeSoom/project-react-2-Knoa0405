import styled from '@emotion/styled';

const Item = styled.li({
  listStyleType: 'none',
  fontSize: 20,
  '& + &': {
    marginLeft: '10px',
    marginBottom: '10px',
  },
});

export default Item;
