import React from 'react';

import List from '../components/styles/List';

import Item from '../components/styles/Item';

import CategoryButton from '../components/styles/CategoryButton';

function TalentBackEndForm({ backEndCategories, onClick }) {
  return (
    <>
      <List>
        {backEndCategories.map(({ id, category }) => (
          <Item key={id}>
            <CategoryButton
              type="button"
              onClick={() => onClick({ category })}
            >
              #
              {category}
            </CategoryButton>
          </Item>
        ))}
      </List>
    </>
  );
}

export default TalentBackEndForm;
