import React from 'react';

import List from '../components/styles/List';

import Item from '../components/styles/Item';

import CategoryButton from '../components/styles/CategoryButton';

function CategoriesForm({ categories, onClick }) {
  return (
    <>
      <List>
        {categories.map(({ id, category }) => (
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

export default CategoriesForm;
